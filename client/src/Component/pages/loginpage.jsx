import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <section id="page-title-area" className="section-padding overlay">
          <div className="container">
            <div className="row">
              {/* Page Title Start */}
              <div className="col-lg-12">
                <div className="section-title  text-center">
                  <h2>Login</h2>
                  <span className="title-line"><i className="fa fa-car" /></span>
                  <p>Welcome to Back.</p>
                </div>
              </div>
              {/* Page Title End */}
            </div>
          </div>
        </section>
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
                        <input type="text" placeholder="Email or Username" />
                      </div>
                      <div className="password">
                        <input type="password" placeholder="Password" />
                      </div>
                      <div className="log-btn">
                        <button type="submit"><i className="fa fa-sign-in" /> Log In</button>
                      </div>
                    </form>
                  </div>
                  <div className="login-other">
                    <span className="or">or</span>
                    <Link to="#" className="login-with-btn facebook"><i className="fa fa-facebook" /> Login With Facebook</Link>
                    <Link to="#" className="login-with-btn google"><i className="fa fa-google" /> Login With Google</Link>
                  </div>
                  <div className="create-ac">
                    <p>Don't have an account? <Link className='two' to='/register'>Sign Up</Link></p>
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
