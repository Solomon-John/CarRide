import React, { Component } from "react";
// import { Link } from "react-router-dom";
import './Adminlogin.css'

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      info: ""
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.message + `token ${res.token}`);

        this.setState({ isLoading: false });
        this.setState({ info: res.message });
        console.log(this.state.info);
        if (res.auth == true) {
          window.localStorage.setItem("userId", res.id);
          window.localStorage.setItem("token", JSON.stringify(res.token));

          console.log(res.token);

          this.props.history.push("/dashboard");
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });

    //console.log(this.state)
  };

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
   
    return (
      <div className='fun'>
        {/* /login */}

        {/* <!-- Material form login --> */}
        <div className="card mt-5" id="signin">
          <h3 className="card-header  dark-text text-center py-4">
            <strong className="mdi mdi-account-key">Admin-Signin</strong>
          </h3>

          {/* <!--Card content--> */}
          <div className="card-body px-lg-5 pt-0">
            {/* <!-- Form --> */}
            <div className="text-center" style={{ color: "#757575" }}>
              {/* <!-- Email --> */}
              <div className="md-form mt-5">
                <input
                  type="email"
                  id="materialLoginFormEmail"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <label
                  htmlFor="materialLoginFormEmail"
                  className="fa fa-envelope"
                >
                  {" "}
                  Email
                </label>
              </div>

              {/* <!-- Password --> */}
              <div className="md-form mt-5">
                <input
                  type="password"
                  id="materialLoginFormPassword"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
                <label
                  htmlFor="materialLoginFormPassword"
                  className="fa fa-lock"
                >
                  {" "}
                  Password
                </label>
              </div>
              {this.state.info === "" || this.state.info === undefined ? (
                <p className="alert alert-warning" style={{ display: "none" }}>
                  {this.state.info}
                </p>
              ) : (
                <p className="alert alert-danger">{this.state.info}</p>
              )}

              {/* <!-- Sign in button --> */}
              <button
                id="loginbtn"
                className="btn btn-outline-pink btn-rounded btn-block my-4 waves-effect z-depth-0 mt-5 mdi mdi-account-check"
                type="submit"
                onClick={this.handleSubmit}
              >
                {" "}
                Sign in
              </button>
            </div>
            {/* <!-- Form --> */}
          </div>
        </div>
        {/* <!-- Material form login --> */}
      </div>
    );
  }
}

export default Signin;
