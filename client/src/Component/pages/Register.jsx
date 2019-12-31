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
                  password:'',
                  retype_password:'',
                  photo:'',
                  info:'',
                  isLoading:false
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
      //retype password changer
      handle_retypePassword(e) {
        this.setState({ retype_password: e.target.value })
      }
      handleCancel() {
        this.setState({ isLoading: !this.state.isLoading })
      }
      //photo selector
      handlePhoto(e) {
        this.setState({ photo: e.target.files[0] })

      }
  

    //register
   async  registerHandle(e){
      e.preventDefault();
     this.setState({ isLoading: true });
     if (this.state.password !== this.state.retype_password) {

       this.setState({ info: "Un-Matched Password" })
       this.setState({ isLoading: false })
     } else {
      
     const formdata = new FormData();
     formdata.append('firstname', this.state.firstname);
     formdata.append("lastname", this.state.lastname);
     formdata.append("email", this.state.email);
     formdata.append("number", this.state.number);
     formdata.append("password", this.state.password);


      await axios.post('http://localhost:1010/register', this.state)
      .then((res)=>{
        this.setState({ info: res.data.message })
        this.setState({ isLoading: false })
        res.data.message === 'registration successful' ?
          this.props.history.push('/login') : this.props.history.push('/register')
      })
    }
  }
        
  render() {
    return (
      <div>
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
                              placeholder="First Name" value={this.state.firstname}
                              onChange={this.firstnameHandle}
                              required />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              placeholder="Last Name"
                              value={this.state.lastname}
                              onChange={this.lastnameHandle}
                              required />
                          </div>
                        </div>
                      </div>
                      <div className="username">
                        <input
                          type="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.emailHandle}
                          required />
                      </div>
                      <div className="username">
                        <input
                          type="text"
                          placeholder="Phone number"
                          value={this.state.number}
                          onChange={this.numberHandle}
                          required />
                      </div>
                      {/* Password */}
                      <div className="password">
                        <input type="password" placeholder="Password" value={this.state.password}
                          onChange={this.passwordHandle}
                          required />
                      </div>
                      <div className="password">
                        <input type="password" placeholder="Confirm-Password" value={this.state.re_typepassword}
                          onChange={this.handle_retypePassword.bind(this)}
                          required />
                      </div>
                      {/*  photo */}
                      {/* <div className="form-group mt-2 mb-2" enctype="multipart/form-data">
                        <label htmlFor="exampleFormControlFile1" className='text-info text-center border-bottom'>Upload a photo</label>
                        <input type="file" className="form-control-file rounded" id="exampleFormControlFile1" onChange={this.handlePhoto.bind(this)} />
                      </div> */}
                      {/* photo end */}
                      <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                        At least 8 characters and 1 digit
                      </small>
                      <div className="log-btn">
                        <button type="submit" onClick={this.registerHandle}>
                          <i className="fa fa-check-square" /> Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="create-ac">
                    <p>
                      Have an account?{" "}
                      <Link className="son" to="/login">
                        Sign In
                      </Link>
                    </p>
                  </div>
                  {this.state.info !== '' ?
                    <div className='alert alert-danger'>{this.state.info}</div> : <div></div>}
                  <p>Or Sign Up With:</p>
                  <Link to="#" className="mx-2" role="button"><i className="fa fa-facebook-f light-blue-text" /></Link>
                  <Link to="#" className="mx-2" role="button"><i className="fa fa-twitter light-blue-text" /></Link>
                  <Link to="#" className="mx-2" role="button"><i className="fa fa-whatsapp light-blue-text" /></Link>
                  <Link to="#" className="mx-2" role="button"><i className="fa fa-github light-blue-text" /></Link>
                  <hr />
                  {/* Terms of service */}
                  <p>By Clicking
                    <em> Sign Up </em> you agree to our
                  <Link to target="_blank"> terms of service</Link>
                  </p>
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
