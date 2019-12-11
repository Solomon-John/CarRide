import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './Component/pages/landingpage'
import LoginPage from './Component/pages/loginpage'
import RegisterPage from './Component/pages/Register'
import CarPage from './Component/pages/CarsPage'
import AboutPage from './Component/pages/Aboutpage'
import Contact from './Component/pages/contact'
import AdminLogin from './Component/Admin/AdminLogin'
import userDashboard from './Component/User/Dashboard/userDashboard'






export default class RoutePage extends Component {
    render() {
        return (
        <div>
        <Switch>


        <Route  path='/' strict exact={true} component={LandingPage}/>

        <Route  path='/home' strict exact={true} component={LandingPage}/>

        <Route  path='/login' strict exact={true} component={LoginPage}/>
        
        <Route  path='/register' strict exact={true} component={RegisterPage}/>

        <Route  path='/car' strict exact={true} component={CarPage}/>

        <Route  path='/about' strict exact={true} component={AboutPage}/>

        <Route  path='/contact' strict exact={true} component={Contact}/>

        <Route path= '/adminlogin' strict exact={true} component={AdminLogin}/>

        <Route path= '/userdashboard' strict exact={true} component={userDashboard}/>
        


        </Switch>
        </div>
        )
    }
}
