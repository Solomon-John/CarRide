
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

let id = 'ok'

export default class userHeader extends Component {

    constructor() {
        super()
        this.state = {
            logOut: '',
            usertoken: ''

        }
        this.handleLogout = this.handleLogout.bind(this)
    }

    async handleLogout() {



        await localStorage.removeItem('token')
        await window.localStorage.clear()
        await this.setState({ usertoken: null })

    }

    render() {
        return (
            <div classNameName=''>
                {/* <!-- Navbar --> */}
                <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">
                    {/* <!-- SideNav slide-out button --> */}
                    <div className="float-left">
                        <Link to="#" data-activates="slide-out" className="button-collapse"><i className="fas fa-bars"></i></Link>
                    </div>
                    {/* <!-- Breadcrumb--> */}
                    <div className="breadcrumb-dn mr-auto">
                        <p>Material Design for Bootstrap</p>
                    </div>
                    <ul className="nav navbar-nav nav-flex-icons ml-auto">
                        <li className="nav-item">
                            <a className="nav-link"><i className="fas fa-envelope"></i> <span className="clearfix d-none d-sm-inline-block">Contact</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="fas fa-comments"></i> <span className="clearfix d-none d-sm-inline-block">Support</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="fas fa-user"></i> <span className="clearfix d-none d-sm-inline-block">Account</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                {/* <!-- /.Navbar --> */}
                    
            </div>
        )
    }
}
