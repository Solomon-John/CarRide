import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      info: '',
      isLoading: false
    };
  }
  
  async handleLogin(e) {

    e.preventDefault()

    await axios.post('http://localhost:1010/login', this.state)
      .then((res) => {
        console.log(res.data.message)
    

        this.setState({info: res.data.message })
        if (res.data.message === "Login successful") {
          // console.log(res.data.firstname) 
          window.localStorage.setItem('token', JSON.stringify(res.data.token))
          window.localStorage.setItem('firstname', res.data.firstname) 
          window.localStorage.setItem("lastname", res.data.lastname)
          window.localStorage.setItem('id', res.data.id)
          window.localStorage.setItem('photo', res.data.photo)
          window.localStorage.setItem('email', res.data.email)
          window.localStorage.setItem('number', res.data.number)       

          this.setState({ isLoading: false })
          this.props.history.push('/userdashboard')

        } else {
          this.props.history.push('/login')
          this.setState({ isLoading: false })
        }
      })

  }


  emailHandle(e) {

    this.setState({ email: e.target.value })
    
  }
  passwordHandle(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div>
        {/*== Login Page Content Start ==*/}
        <section id="lgoin-page-wrap" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-8 m-auto">
                <div className="login-page-content">
                  <div className="login-form">
                    <h3>Welcome Back!</h3>
                    <form action="#">
                      <div className="username">
                        <input type="text" placeholder="Email or Username" value={this.state.email} onChange={this.emailHandle.bind(this)}  required />
                      </div>
                      <div className="password">
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.passwordHandle.bind(this)} required />
                      </div>
                      <div className="log-btn">
                        <button type="submit" onClick={this.handleLogin.bind(this)}><i className="fa fa-sign-in" /> Log In</button>
                      </div>
                    </form>
                  </div>
                  
                  <div className="create-ac">
                    <p>Don't have an account? <Link className='two' to='/register'>Sign Up</Link></p>
                  </div>
                  <div className="login-menu">
                    <Link to="about.html">About</Link>
                    <span>|</span>
                    <Link to="contact.html">Contact</Link>
                  </div>
                  {this.state.info !== '' ? <div className='alert alert-danger'>{this.state.info}</div> : <div></div>}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== Login Page Content End ==*/}
      </div>
    );
  }
}
export default Signin