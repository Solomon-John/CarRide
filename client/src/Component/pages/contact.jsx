import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class contactPage extends Component {
    render() {
        return (
            <div>
         {/* <!--== Page Title Area Start ==--> */}
                    <section id="page-title-area" className="section-padding overlay">
                        <div className="container">
                            <div className="row">
                                {/* <!-- Page Title Start --> */}
                                <div className="col-lg-12">
                                    <div className="section-title  text-center">
                                        <h2>Contact Us</h2>
                                        <span className="title-line"><i className="fa fa-car"></i></span>
                                        <p>Welcome. For more help, Please Contact Us.</p>
                                    </div>
                                </div>
                                {/* <!-- Page Title End --> */}
                            </div>
                        </div>
                    </section>
                    {/* <!--== Page Title Area End ==--> */}

                    {/* <!--== Contact Page Area Start ==--> */}
                    <div className="contact-page-wrao section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="contact-form">
                                        <form action="index.html">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="name-input">
                                                        <input type="text" placeholder="Full Name"/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="email-input">
                                                        <input type="email" placeholder="Email Address"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="website-input">
                                                        <input type="url" placeholder="Website"/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="subject-input">
                                                        <input type="text" placeholder="Subject"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="message-input">
                                                <textarea name="review" cols="30" rows="10" placeholder="Message"></textarea>
                                            </div>

                                            <div className="input-submit">
                                                <button type="submit">Submit Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--== Contact Page Area End ==--> */}
                    
                    {/* <!--== FAQ Area Start ==--> */}

                <section id="faq-page-area" className="section-padding">
                    <div className="container">
                        <div className="row">
                            {/* Section Title Start */}
                            <div className="col-lg-12">
                                <div className="section-title  text-center">
                                    <h2>Faqs</h2>
                                    <span className="title-line"><i className="fa fa-car" /></span>
                                    <p>Get to in-touch.</p>
                                </div>
                            </div>
                            {/* Section Title End */}
                            {/* <!-- FAQ Content Start --> */}
                            <div className="col-lg-8">
                                <div className="faq-details-content">
                                    {/* <!-- Single FAQ Subject  Start --> */}
                                    <div className="single-faq-sub">
                                        <h3>Payment</h3>
                                        <div className="single-faq-sub-content">
                                            <div id="accordion">
                                                {/* <!-- Single FAQ Start --> */}
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h5 className="mb-0"><button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <span>Am I old enough to rent a car ?</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <i className="fa fa-angle-up"></i>
                                                        </button></h5>
                                                    </div>

                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                        <div className="card-body">
                                                            Most companies will rent you a car if you’re at least 21 (and some will rent to younger drivers). But if you’re under 25, you might still have to pay a ‘young driver fee’.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single FAQ End --> */}
                                                
                                                {/* <!-- Single FAQ Start --> */}
                                                <div className="card">
                                                    <div className="card-header" id="headingTwo">
                                                        <h5 className="mb-0"><button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <span>Is the renting price all inclusive</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <i className="fa fa-angle-up"></i>
                                                        </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                        <div className="card-body">
                                                            The price you see includes the car, mandatory cover (e.g. Theft Protection and Collision Damage Waiver) and mandatory fees (e.g. one-way fees, airport surcharges and local taxes).
                                                            It also includes any extras you’ve already added (e.g. GPS or baby seats).
                                                            It doesn’t include any extra cover you buy when you get to the rental counter.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single FAQ Start --> */}
                                                
                                                {/* <!-- Single FAQ End --> */}
                                                <div className="card">
                                                    <div className="card-header" id="headingThree">
                                                        <h5 className="mb-0"><button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <span>What is your refund policy?</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <i className="fa fa-angle-up"></i>
                                                        </button></h5>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                        <div className="card-body">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high life acNihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single FAQ End --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single FAQ Subject End --> */}
                                    
                                    {/* <!-- Single FAQ Subject  Start --> */}
                                    <div className="single-faq-sub">
                                        <h3>Preparation</h3>
                                        <div className="single-faq-sub-content">
                                            <div id="accordion_2">
                                                {/* <!-- Single FAQ Start --> */}
                                                <div className="card">
                                                    <div className="card-header" id="heading4">
                                                        <h5 className="mb-0"><button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                            <span>Can I book a car for a partner, colleagues and friend?</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <i className="fa fa-angle-up"></i>
                                                        </button></h5>
                                                    </div>

                                                    <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion_2">
                                                        <div className="card-body">
                                                            Of course. Just put their details in the ‘Driver Details’ form when you’re booking the car.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single FAQ End --> */}
                                                
                                                {/* <!-- Single FAQ Start --> */}
                                                <div className="card">
                                                    <div className="card-header" id="headingFour">
                                                        <h5 className="mb-0"><button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            <span>Do I have to make reservation?</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <i className="fa fa-angle-up"></i>
                                                        </button></h5>
                                                    </div>
                                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion_2">
                                                        <div className="card-body">
                                                            <li>First create an acount with us</li>
                                                            <li>Give us your details</li>
                                                            <li>Make your reservation</li>
                                                            <li>Book a your desire car</li>
                                                            <li>Make your payment</li>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single FAQ Start --> */}
                                                
                                                {/* <!-- Single FAQ End --> */}
                                                <div className="card">
                                                    <div className="card-header" id="headingFive">
                                                        <h5 className="mb-0"><button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            <span>What is your Privacy policy?</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <i className="fa fa-angle-up"></i>
                                                        </button></h5>
                                                    </div>
                                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion_2">
                                                        <div className="card-body">
                                                            We understand that booking online involves significant trust on your part. We value your trust and make it high priority to ensure the security and confidentiality personal information you provide to us. Please read the following policy to learn about our privacy practices. By visiting this website, you are accepting the practices described herein. We receive and store any information you enter on our website or give us any other way. This information that can identify you (“personal information”), including your first and last name, telephone number, postal and email addresses, fax number and billing information ( such as credit card number, cardholder name and expiration date) you can choose not to provide information to us. But in general some information about  you is required in order for you to register as a member, book travel, complete a traveler profile participate in a survey contest, or sweepstakes, ask us a question or initiate other transactions on our site.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single FAQ End --> */}
                                                
                                                {/* <!-- Single FAQ End --> */}
                                                <div className="card">
                                                    <div className="card-header" id="headingSix">
                                                        <h5 className="mb-0"><button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                            <span>Any tips on chosen the right car</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <i className="fa fa-angle-up"></i>
                                                        </button></h5>
                                                    </div>
                                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion_2">
                                                        <div className="card-body">
                                                            <li>Think about where you’re going. An SUV might be great for cruising down a Mount-parti freeway, but a smaller car’s probably much easier to drive in Lokoja.</li> 
                                                            <li>See what other people think. You’ll find lots of reviews and ratings on our site, so find out what other customers liked (and didn’t like) about each rental company.</li> 
                                                            <li>Don’t forget the gearbox. In some countries, nearly everyone drives a manual car. In others, automatics are the norm. Make sure you rent one you can drive.</li>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Single FAQ End --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single FAQ Subject End --> */}
                                </div>
                            </div>
                            {/* <!-- FAQ Content End --> */}

                            {/* <!-- Sidebar Area Start --> */}
                            <div className="col-lg-4">
                                <div className="sidebar-content-wrap m-t-50">
                                    {/* <!-- Single Sidebar Start --> */}
                                    <div className="single-sidebar">
                                        <h3>For More Informations</h3>

                                        <div className="sidebar-body">
                                            <p><i className="fa fa-mobile"></i> +234 8182670783</p>
                                            <p><i className="fa fa-clock-o"></i> Mon - Sat 8.00 - 18.00</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Sidebar End --> */}

                                    {/* <!-- Single Sidebar Start --> */}
                                    <div className="single-sidebar">
                                        <h3>Rental Tips</h3>

                                        <div className="sidebar-body">
                                            <ul className="recent-tips">
                                                <li className="single-recent-tips">
                                                    <div className="recent-tip-thum">
                                                        <Link to="#"><img src={require("../../asset/img/we-do/service1-img.png")}/></Link>
                                                    </div>
                                                    <div className="recent-tip-body">
                                                        <h4><Link to="#">How to Enjoy Lokoja Car Rentals</Link></h4>
                                                        <span className="date">February 5, 2018</span>
                                                    </div>
                                                </li>

                                                <li className="single-recent-tips">
                                                    <div className="recent-tip-thum">
                                                        <Link to="#"><img src={require("../../asset/img/we-do/service3-img.png")}/></Link>
                                                    </div>
                                                    <div className="recent-tip-body">
                                                        <h4><Link to="#">How to Get good maintance to your cars</Link></h4>
                                                        <span className="date">February 5, 2018</span>
                                                    </div>
                                                </li>

                                                <li className="single-recent-tips">
                                                    <div className="recent-tip-thum">
                                                        <Link to="#"><img src={require("../../asset/img/we-do/service2-img.png")}/></Link>
                                                    </div>
                                                    <div className="recent-tip-body">
                                                        <h4><Link to="#">Get a wide range of car insurance </Link></h4>
                                                        <span className="date">February 5, 2018</span>
                                                    </div>
                                                </li>

                                                <li className="single-recent-tips">
                                                    <div className="recent-tip-thum">
                                                        <Link to="#"><img src={require("../../asset/img/we-do/service3-img.png")}/></Link>
                                                    </div>
                                                    <div className="recent-tip-body">
                                                        <h4><Link to="#">How to Enjoy Lokoja Car Wash</Link></h4>
                                                        <span className="date">February 5, 2018</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Single Sidebar End --> */}

                                    {/* <!-- Single Sidebar Start --> */}
                                    <div className="single-sidebar">
                                        <h3>Connect with Us</h3>

                                        <div className="sidebar-body">
                                            <div className="social-icons text-center">
                                                <Link to="#" target="_blank"><i className="fa fa-facebook"></i></Link>
                                                <Link to="#" target="_blank"><i className="fa fa-twitter"></i></Link>
                                                <Link to="#" target="_blank"><i className="fa fa-behance"></i></Link>
                                                <Link to="#" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                                <Link to="#" target="_blank"><i className="fa fa-dribbble"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single Sidebar End --> */}
                                </div>
                            </div>
                            {/* <!-- Sidebar Area End --> */}
                        </div>
                    </div>
                </section>
                {/* <!--== FAQ Area End ==--> */}


            </div>
        )
    }
}
