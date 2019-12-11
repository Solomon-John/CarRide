import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  axios from 'axios'

export default class Register extends Component {
      constructor(props){
         super(props)
         this.state={
                  firstname:'',
                  lastname:'',
                  email:'',
                  number:'',
                  password:''
                }
                this.firstnameHandle = this.firstnameHandle.bind(this);
                this.lastnameHandle = this.lastnameHandle.bind(this);
                this.emailHandle = this.emailHandle.bind(this);
                this.passwordHandle = this.passwordHandle.bind(this);
                this.numberHandle = this.numberHandle.bind(this);
                this.registerHandle = this.registerHandle.bind(this);
              }
      //firstname changer
      firstnameHandle(e){
        this.setState({firstname: e.target.value})
        console.log(e.target.value)
      }
      //Lastname changer
      lastnameHandle(e){
        this.setState({lastname:e.target.value})
      }
      //email changer
      emailHandle(e){
        this.setState({email:e.target.value})
      }
      //number changer
      numberHandle(e){
        this.setState({number:e.target.value})
      }
      // password changer
      passwordHandle(e){
        this.setState({password:e.target.value})
      }

    //register
   async  registerHandle(e){
      e.preventDefault();
      await axios.post('http://localhost:1010/register', this.state)
      .then((res)=>{
          if(res.data.message === 'success'){
            alert('successfully registered')
            this.props.history.push('/login')
        }else{
          alert('registration failed')
          this.props.history.push('/register')
        }
      })
    }
        
  render() {
              // this.firstnameHandle(e){

              // }
    return (
      <div>
        <section id="page-title-area" className="section-padding overlay">
          <div className="container">
            <div className="row">
              {/* Page Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>Register</h2>
                  <span className="title-line">
                    <i className="fa fa-car" />
                  </span>
                  <p>Be Part of US .</p>
                </div>
              </div>
              {/* Page Title End */}
            </div>
          </div>
        </section>
        {/*== Page Title Area End ==*/}
        {/*== Login Page Content Start ==*/}
        <section id="lgoin-page-wrap" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-8 m-auto">
                <div className="login-page-content">
                  <div className="login-form">
                    <h3>Sign Up</h3>
                    <form action="#">
                      <div className="name">
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              type="text"
                              placeholder="First Name"
                              value={this.state.firstname}
                              onChange={this.firstnameHandle}
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              placeholder="Last Name"
                              value={this.state.lastname}
                              onChange={this.lastnameHandle}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="username">
                        <input
                          type="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.emailHandle}
                        />
                      </div>
                      <div className="username">
                        <input
                          type="text"
                          placeholder="Phone number"
                          value={this.state.number}
                          onChange={this.numberHandle}
                        />
                      </div>
                      <div className="password">
                        <input
                          type="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.passwordHandle}
                        />
                      </div>
                      <div className="log-btn">
                        <button type="submit" onClick={this.registerHandle}>
                          <i className="fa fa-check-square" /> Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="login-other">
                    <span className="or">or</span>
                    <Link to="#" className="login-with-btn facebook">
                      <i className="fa fa-facebook" /> Signup With Facebook
                    </Link>
                    <Link to="#" className="login-with-btn google">
                      <i className="fa fa-google" /> Signup With Google
                    </Link>
                  </div>
                  <div className="create-ac">
                    <p>
                      Have an account?{" "}
                      <Link className="son" to="/login">
                        Sign In
                      </Link>
                    </p>
                  </div>
                  <div className="login-menu">
                    <Link to="about.html">About</Link>
                    <span>|</span>
                    <Link to="contact.html">Contact</Link>
                  </div>
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
