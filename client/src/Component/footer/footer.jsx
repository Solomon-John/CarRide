import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
      <div>
        {/*== Footer Area Start ==*/}
        <section id="footer-area">
          {/* Footer Widget Start */}
          <div className="footer-widget-area">
            <div className="container">
              <div className="row">
                {/* Single Footer Widget Start */}
                <div className="col-lg-4 col-md-6">
                  <div className="single-footer-widget">
                    <h2>About Us</h2>
                    <div className="widget-body">
                      <img src={require("../../asset/img/logo.png")} />
                      <p>CarRide is an on-demand car-ride-hailing services created with the vision to solve the transportation challenge of getting people and goods to their destination.</p>
                      <div className="newsletter-area">
                        <form action="index.html">
                          <input type="email" placeholder="Subscribe Our Newsletter" />
                          <button type="submit" className="newsletter-btn"><i className="fa fa-send" /></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Footer Widget End */}
                {/* Single Footer Widget Start */}
                <div className="col-lg-4 col-md-6">
                  <div className="single-footer-widget">
                    <h2>Recently used</h2>
                    <div className="widget-body">
                      <ul className="recent-post">
                        <li>
                          <Link to="#">
                            Home Page!
                            <i className="fa fa-long-arrow-right" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Register!
                            <i className="fa fa-long-arrow-right" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            About us!
                            <i className="fa fa-long-arrow-right" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Contact Us!
                            <i className="fa fa-long-arrow-right" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Single Footer Widget End */}
                {/* Single Footer Widget Start */}
                <div className="col-lg-4 col-md-6">
                  <div className="single-footer-widget">
                    <h2>get touch</h2>
                    <div className="widget-body">
                      <p text-align='left'>Be part of our community...celebrating the future</p>
                      <ul className="get-touch">
                        <li><i className="fa fa-map-marker" /> Phase1 Lokoja Kogi State</li>
                        <li><i className="fa fa-mobile" /> +234 7081564141</li>
                        <li><i className="fa fa-envelope" /> caridelkj@gmail.com</li>
                      </ul>
                      <Link to="https://goo.gl/maps/b5mt45MCaPB2" className="map-show" target="_blank">Show Location</Link>
                    </div>
                  </div>
                </div>
                {/* Single Footer Widget End */}
              </div>
            </div>
          </div>
          {/* Footer Widget End */}
          {/* Footer Bottom Start */}
          <div className="footer-bottom-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <p>
                    Copyright © All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom End */}
        </section>
        {/*== Footer Area End ==*/}
      </div>
    )
  }
}
