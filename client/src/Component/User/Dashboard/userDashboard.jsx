import React, { Component } from 'react'
import Siderbar from '../siderBar'
import UserHeader from '../userHeader'


export default class userDashboard extends Component {
  render() {
    return (
      <div>
        <Siderbar />
        <UserHeader/>
        <div id="main-wrapper">
          <div className="main-content">
            <section id="welcome">
              <div className="content-header">
                <h1>Welcome to CarRide</h1>
              </div>
              <div className="welcome">
                <h2 className="twenty">Welcome To CarRide</h2>

                <p>
                  Firstly, a huge thanks for purchasing this theme, your support
                  is truly appreciated!
                </p>

                <p>
                  This document covers the installation and use of this theme
                  and often reveals answers to common problems and issues - read
                  this document thoroughly if you are experiencing any
                  difficulties. If you have any questions that are beyond the
                  scope of this document, feel free to email at{" "}
                  <code>
                    <a href="mailto:support@pixelcoder.net">
                      support@pixelcoder.net
                    </a>
                  </code>{" "}
                  Thank you so much!
                </p>
              </div>

              <div className="features">
                <h2 className="twenty">Our Services::</h2>

                <ul>
                  <li>Car &amp; Life Insurance </li>
                  <li>Car Rent</li>
                  <li>Taxi Service</li>
                  <li>Car Wash</li>
                  <li>Car Repair</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
