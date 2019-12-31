import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            token:''
        }
    }
    handleLogOut() {
        localStorage.clear()
    }
//      componentWillMount(){
//      const token = window.localStorage.getItem("token")
//      this.setState({token:token})

//    }
  render() {
    const token = window.localStorage.getItem("token")
  
  if(token){
    return(
      <div>
            {/*== Header Area Start ==*/}
            <header id="header-area" className="fixed-top">

                {/*== Header Bottom Start ==*/}
                <div id="header-bottom">
                    <div className="container">
                        <div className="row">
                            {/*== Logo Start ==*/}
                            <div className="col-lg-4">
                                <Link className="logo" to='#'>
                                    <img src={require("../../../asset/img/logo.png")} />
                                </Link>
                            </div>
                            {/*== Logo End ==*/}
                            {/*== Main Menu Start ==*/}
                            <div className="col-lg-8 d-none d-xl-block">
                                {/* <!-- Navbar --> */}
                                <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg ">
                                    <ul className="nav navbar-nav nav-flex-icons ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/userdashboard'><i className="fa fa-dashboard"></i> <span className="clearfix d-none d-sm-inline-block">DashBoard</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link"><i className="fa fa-comments"></i> <span className="clearfix d-none d-sm-inline-block">Support</span></Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i>
                                                Account
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                                <Link className="dropdown-item" to="/login" onClick={this.handleLogOut.bind(this)}>Logout</Link>
                                                <Link className="dropdown-item" to="#">Setting</Link>
                                                <Link className="dropdown-item" to="#">Change password</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/*== Main Menu End ==*/}
                        </div>
                    </div>
                </div>
                {/*== Header Bottom End ==*/}
            </header>
      </div>

    );
  }
    return (
      <div>
            {/*== Header Area Start ==*/}
            <header id="header-area" className="fixed-top">
               
                {/*== Header Bottom Start ==*/}
                <div id="header-bottom">
                    <div className="container">
                        <div className="row">
                            {/*== Logo Start ==*/}
                            <div className="col-lg-4">
                                <Link className="logo" to='#'>
                                    <img src={require("../../../asset/img/logo.png")} />
                                </Link>
                            </div>
                            {/*== Logo End ==*/}
                            {/*== Main Menu Start ==*/}
                            <div className="col-lg-8 d-none d-xl-block">
                                <nav className="mainmenu align right">
                                    <ul>
                                        <li className="active">
                                            <Link className="active" to="/home">Home</Link>
                                        </li>
                                        <li>
                                            <Link className="active" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                    <div className="navbar-btn">
                                        <Link to="/login">Sign-in</Link>
                                        <Link to="/register">Sign up</Link>
                                        
                                    </div>
                                </nav>
                            </div>
                            {/*== Main Menu End ==*/}
                        </div>
                    </div>
                </div>
                {/*== Header Bottom End ==*/}
            </header>
            {/*== Header Area End ==*/}
      </div>
    )
  }
}
