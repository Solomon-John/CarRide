import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
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
                                            <Link className="active" to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link className="active" to="/car">Cars</Link>
                                        </li>
                                        <li>
                                            <Link className="active" to="#">Pages</Link>
                                            <ul>
                                                <li>
                                                    <Link className="active" to="#">Driver</Link>
                                                </li>
                                                <li>
                                                    <Link className="active" to="#">404</Link>
                                                </li>
                                                <li>
                                                    <Link className="active" to="#">Gallery</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link className="active" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                    <div className="navbar-btn">
                                        <Link to="/login">Sign-in</Link>
                                        <Link to="/register">Sign-up</Link>
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
