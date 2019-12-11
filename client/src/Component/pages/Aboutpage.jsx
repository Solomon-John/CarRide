import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class aboutPages extends Component {
    render() {
        return (
            <div>
                {/*== Page Title Area Start ==*/}
                <section id="page-title-area" className="section-padding overlay">
                    <div className="container">
                        <div className="row">
                            {/* Page Title Start */}
                            <div className="col-lg-12">
                                <div className="section-title  text-center">
                                    <h2>About US</h2>
                                    <span className="title-line"><i className="fa fa-car" /></span>
                                    <p>Welcome, Get To Know More About US .</p>
                                </div>
                            </div>
                            {/* Page Title End */}
                        </div>
                    </div>
                </section>
                {/*== Page Title Area End ==*/}
                {/*== About Page Content Start ==*/}
                <section id="about-area" className="section-padding">
                    <div className="container">
                        <div className="row">
                            {/* Section Title Start */}
                            <div className="col-lg-12">
                                <div className="section-title  text-center">
                                    <h2>About us</h2>
                                    <span className="title-line"><i className="fa fa-car" /></span>
                                    <p>Welcome, get alone with us.</p>
                                </div>
                            </div>
                            {/* Section Title End */}
                        </div>
                        <div className="row">
                            {/* About Content Start */}
                            <div className="col-lg-6">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <div className="about-content">
                                            <p>CarRide is an on-demand car-ride-hailing services created with the vision to solve the transportation challenge of getting people and goods to their destination, in timely and safe fashion. CarRide featured in the web and mobile app</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* About Content End */}
                            {/* About Video Start */}
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src={require("../../asset/img/home-2-about.png")}/>
                                </div>
                            </div>
                            {/* About Video End */}
                        </div>
                        {/* About Fretutes Start */}
                        <div className="about-feature-area">
                            <div className="row">
                                {/* Single Fretutes Start */}
                                <div className="col-lg-4">
                                    <div className="about-feature-item active">
                                        <i className="fa fa-car" />
                                        <h3>FREE TYRE CARE PLAN</h3>
                                        <p>Our free tyre care plan provides you with ongoing peace of mind when you purchase any tyres from the tyre care plan range.</p>
                                    </div>
                                </div>
                                {/* Single Fretutes End */}
                                {/* Single Fretutes Start */}
                                <div className="col-lg-4">
                                    <div className="about-feature-item">
                                        <i className="fa fa-car" />
                                        <h3>NEW CAR SERVICING</h3>
                                        <p>We can examine your new vehicle in accordance with the manufacturer's requirements and maintain its statutory warranty.</p>
                                    </div>
                                </div>
                                {/* Single Fretutes End */}
                                {/* Single Fretutes Start */}
                                <div className="col-lg-4">
                                    <div className="about-feature-item">
                                        <i className="fa fa-car" />
                                        <h3>PACKAGED CAR SERVICING</h3>
                                        <p>We offer two levels of packaged car servicing, each offering you a comprehensive check-up at a great price. Plus, selected services now come with 6 months free roadside assistance.</p>
                                    </div>
                                </div>
                                {/* Single Fretutes End */}
                            </div>
                        </div>
                        {/* About Fretutes End */}
                    </div>
                </section>
                {/*== About Page Content End ==*/}
                {/*== Our Facility Content Start ==*/}
                <section id="our-facility" className="section-padding overlay">
                    <div className="container">
                        <div className="row">
                            {/* Single Facility Start */}
                            <div className="col-lg-3 col-md-6">
                                <div className="single-our-facility">
                                    <h3>LIMO PARTY RENT</h3>
                                    <ul>
                                        <li>Parallax Everywhere</li>
                                        <li>Interactive and Fun</li>
                                        <li>Responsive and Refined</li>
                                        <li>Color it All</li>
                                        <li>Customize and Create</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single Facility Start */}
                            {/* Single Facility Start */}
                            <div className="col-lg-3 col-md-6">
                                <div className="single-our-facility">
                                    <h3>BUSINESS LIMO RENT</h3>
                                    <ul>
                                        <li>Parallax Everywhere</li>
                                        <li>Interactive and Fun</li>
                                        <li>Responsive and Refined</li>
                                        <li>Color it All</li>
                                        <li>Customize and Create</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single Facility Start */}
                            {/* Single Facility Start */}
                            <div className="col-lg-3 col-md-6">
                                <div className="single-our-facility">
                                    <h3>HOTEL/CASINO/HOTEL</h3>
                                    <ul>
                                        <li>Parallax Everywhere</li>
                                        <li>Interactive and Fun</li>
                                        <li>Responsive and Refined</li>
                                        <li>Color it All</li>
                                        <li>Customize and Create</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single Facility Start */}
                            {/* Single Facility Start */}
                            <div className="col-lg-3 col-md-6">
                                <div className="single-our-facility">
                                    <h3>AIRPORT TRANSPORT</h3>
                                    <ul>
                                        <li>Parallax Everywhere</li>
                                        <li>Interactive and Fun</li>
                                        <li>Responsive and Refined</li>
                                        <li>Color it All</li>
                                        <li>Customize and Create</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single Facility Start */}
                        </div>
                    </div>
                </section>
                {/*== Our Facility Content End ==*/}

                {/* <!--== Team Area Start ==--> */}
    <section id="team-area" className="section-padding">
        <div className="container">
            <div className="row">
                {/* <!-- Section Title Start --> */}
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Our Creative Persons</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Meet the best Team.</p>
                    </div>
                </div>
                {/* <!-- Section Title End --> */}
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="team-content">
                        <div className="row">
                            {/* <!-- Team Tab Menu start --> */}
                            <div className="col-lg-4">
                                <div className="team-tab-menu">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link active" id="tab_item_1" data-toggle="tab" to="#team_member_1" role="tab" aria-selected="true">
                                                <div className="team-mem-icon">
                                                    <img src={require("../../asset/img/team/team-mem-thumb-1.jpg")} />
                                                </div>
                                                <h5>John Snow</h5>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="tab_item_2" data-toggle="tab" to="#team_member_2" role="tab" aria-selected="true">
                                                <div className="team-mem-icon">
                                                    <img src={require("../../asset/img/team/team-mem-thumb-3.jpg")}/>
                                                </div>
                                                <h5>Victor Smith</h5>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="tab_item_3" data-toggle="tab" to="#team_member_3" role="tab" aria-selected="true">
                                                <div className="team-mem-icon">
                                                    <img src={require("../../asset/img/team/team-mem-thumb-2.jpg")}/>
                                                </div>
                                                <h5>Alex James</h5>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="tab_item_4" data-toggle="tab" to="#team_member_4" role="tab" aria-selected="true">
                                                <div className="team-mem-icon">
                                                    <img src={require("../../asset/img/team/team-mem-thumb-4.jpg")}/>
                                                </div>
                                                <h5>Gift William</h5>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Tab Menu End --> */}

                            {/* <!-- Team Tab Content start --> */}
                            <div className="col-lg-8">
                                <div className="tab-content" id="myTabContent">
                                    {/* <!-- Single Team  start --> */}
                                    <div className="tab-pane fade show active" id="team_member_1" role="tabpanel" aria-labelledby="tab_item_1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-pro-pic">
                                                    <img src={require("../../asset/img/team/team-mem-1.jpg")}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-info text-center">
                                                    <h4>John Snow</h4>
                                                    <h5>Developer</h5>
                                                    <span className="quote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin fermentum dolor. Nunc nec augue urna. Cras varius orci vitae lacinia efficitur.</p>
                                                    <div className="team-social-icon">
                                                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                                        <Link to="#"><i className="fa fa-pinterest"></i></Link>
                                                        <Link to="#"><i className="fa fa-dribbble"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single Team  End --> */}

                                    {/* <!-- Single Team  start --> */}
                                    <div className="tab-pane fade" id="team_member_2" role="tabpanel" aria-labelledby="tab_item_2">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-pro-pic">
                                                    <img src={require("../../asset/img/team/team-mem-3.jpg")}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-info text-center">
                                                    <h4>Victor Smith</h4>
                                                    <h5>Designer</h5>
                                                    <span className="quote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin fermentum dolor. Nunc nec augue urna. Cras varius orci vitae lacinia efficitur.</p>
                                                    <div className="team-social-icon">
                                                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                                        <Link to="#"><i className="fa fa-pinterest"></i></Link>
                                                        <Link to="#"><i className="fa fa-dribbble"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single Team  End --> */}

                                    {/* <!-- Single Team  start --> */}
                                    <div className="tab-pane fade" id="team_member_3" role="tabpanel" aria-labelledby="tab_item_3">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-pro-pic">
                                                    <img src={require("../../asset/img/team/team-mem-2.jpg")}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-info text-center">
                                                    <h4>Alex James</h4>
                                                    <h5>Marketer</h5>
                                                    <span className="quote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin fermentum dolor. Nunc nec augue urna. Cras varius orci vitae lacinia efficitur.</p>
                                                    <div className="team-social-icon">
                                                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                                        <Link to="#"><i className="fa fa-pinterest"></i></Link>
                                                        <Link to="#"><i className="fa fa-dribbble"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single Team  End --> */}

                                    {/* <!-- Single Team  start --> */}
                                    <div className="tab-pane fade" id="team_member_4" role="tabpanel" aria-labelledby="tab_item_4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-pro-pic">
                                                    <img src={require("../../asset/img/team/team-mem-4.jpg")}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-info text-center">
                                                    <h4>John Willam</h4>
                                                    <h5>Manager</h5>
                                                    <span className="quote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin fermentum dolor. Nunc nec augue urna. Cras varius orci vitae lacinia efficitur.</p>
                                                    <div className="team-social-icon">
                                                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                                                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                                                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                                        <Link to="#"><i className="fa fa-pinterest"></i></Link>
                                                        <Link to="#"><i className="fa fa-dribbble"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single Team  End --> */}
                                </div>
                            </div>
                            {/* <!-- Team Tab Content End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--== Team Area End ==--> */}

    {/* <!--== What We Do Area Start ==--> */}
    <section id="what-do-area" className="section-padding">
        <div className="container">
            <div className="row">
                {/* <!-- Section Title Start --> */}
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>WHAT WE DO</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                {/* <!-- Section Title End --> */}
            </div>

            <div className="row">
                {/* <!-- Single We Do Start --> */}
                <div className="col-lg-4 col-md-4">
                    <div className="single-we-do we-do-bg-1">
                        <div className="we-do-content">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <h3>CAR INSPECTION</h3>
                                    <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                                    <Link to="#">Read More </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Single We Do End --> */}

                {/* <!-- Single We Do Start --> */}
                <div className="col-lg-4 col-md-4">
                    <div className="single-we-do we-do-bg-2">
                        <div className="we-do-content">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <h3>CAR RENTAL</h3>
                                    <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                                    <Link to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Single We Do End --> */}

                {/* <!-- Single We Do Start --> */}
                <div className="col-lg-4 col-md-4">
                    <div className="single-we-do we-do-bg-3">
                        <div className="we-do-content">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <h3>CAR REPAIR</h3>
                                    <p>Erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                                    <Link to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Single We Do End --> */}
            </div>
        </div>
    </section>
    {/* <!--== What We Do Area End ==--> */}



            </div>
        )
    }
}
