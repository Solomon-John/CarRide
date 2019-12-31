import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class landingPage extends Component {
    render() {
    return (
        <div>

         {/* <!--== Slider Area Start ==--> */}
        <section id="slider-area">
        {/* <!--== slide Item One ==--> */}
        <div className="single-slide-item overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="book-a-car">
                            <form action="index.html">
                                {/* <!--== Pick Up Location ==--> */}
                                <div className="pickup-location book-item">
                                    <h4>PICK-UP LOCATION:</h4>
                                    <select className="custom-select">
                                        <option selected>Select</option>
                                        <option value="1">Kogi</option>
                                        <option value="2">Abuja</option>
                                        <option value="3">Lagos</option>
                                        <option value="3">Kwara</option>
                                    </select>
                                </div>
                                {/* <!--== Pick Up Location ==--> */}

                                {/* <!--== Pick Up Date ==--> */}
                                <div className="pick-up-date book-item">
                                    <h4>PICK-UP DATE:</h4>
                                    <input type='date' placeholder="Pick Up Date"/>

                                    <div className="return-car">
                                        <h4>Return DATE:</h4>
                                        <input type='date'  placeholder="Return Date"  />
                                    </div>
                                </div>
                                {/* <!--== Pick Up Location ==--> */}

                                {/* <!--== Car Choose ==--> */}
                                <div className="choose-car-type book-item">
                                    <h4>CHOOSE CAR TYPE:</h4>
                                    <select className="custom-select">
                                        <option selected>Select</option>
                                        <option value="1">BMW</option>
                                        <option value="2">Audi</option>
                                        <option value="3">Lexus</option>
                                    </select>
                                </div>
                                {/* <!--== Car Choose ==--> */}

                                <div className="book-button text-center">
                                    <button className="book-now-btn"><Link to='/login'>Book Now</Link></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-7 text-right">
                        <div className="display-table">
                            <div className="display-table-cell">
                                <div className="slider-right-text">
                                    <h1>BOOK A CAR TODAY!</h1>
                                <p> FOR AS LOW AS NGN 3,650 A DAY PLUS 15% DISCOUNT <br/> FOR OUR RETURNING CUSTOMERS </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--== slide Item One ==--> */}
    </section>
    {/* <!--== Slider Area End ==--> */}

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

    
    {/* <!--== Services Area Start ==--> */}
    <section id="service-area" className="section-padding">
        <div className="container">
            <div className="row">
                {/* <!-- Section Title Start --> */}
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Our Services</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>welcome to our service.</p>
                    </div>
                </div>
                {/* <!-- Section Title End --> */}
            </div>
        
			{/* <!-- Service Content Start --> */}
			<div className="row">
				{/* <!-- Single Service Start --> */}
				<div className="col-lg-4 text-center">
					<div className="service-item">
						<i className="fa fa-taxi"></i>
						<h3>RENTAL CAR</h3>
                                <p>We rent the best cars in Africa, We also offer a nationwide guarantee on all customer. Why go anywhere else?.</p>
					</div>
				</div>
				{/* <!-- Single Service End --> */}
				
				{/* <!-- Single Service Start --> */}
				<div className="col-lg-4 text-center">
					<div className="service-item">
						<i className="fa fa-cog"></i>
						<h3>CAR REPAIR</h3>
                        <p>Our qualified mechanics and experienced technicians will use the best quality parts, every time.
                        </p>
					</div>
				</div>
				{/* <!-- Single Service End --> */}
				
				{/* <!-- Single Service Start --> */}
				<div className="col-lg-4 text-center">
					<div className="service-item">
						<i className="fa fa-map-marker"></i>
						<h3>TAXI SERVICE</h3>
						<p>We have cars available for taxi services, to help easy transportation.</p>
					</div>
				</div>
				{/* <!-- Single Service End --> */}
				
				{/* <!-- Single Service Start --> */}
				<div className="col-lg-4 text-center">
					<div className="service-item">
						<i className="fa fa-life-ring"></i>
						<h3>DELIVERY</h3>
						<p>We give the best delivery service in town.</p>
					</div>
				</div>
				{/* <!-- Single Service End --> */}
				
				{/* <!-- Single Service Start --> */}
				<div className="col-lg-4 text-center">
					<div className="service-item">
						<i className="fa fa-bath"></i>
						<h3>car wash</h3>
						<p>We use the best washing material for cars, we also offer car maintance services.</p>
					</div>
				</div>
				{/* <!-- Single Service End --> */}
				
				{/* <!-- Single Service Start --> */}
				<div className="col-lg-4 text-center">
					<div className="service-item">
						<i className="fa fa-phone"></i>
						<h3>call driver</h3>
						<p>Have the most wonderful and intelligent drivers, with good working experience.</p>
					</div>
				</div>
				{/* <!-- Single Service End --> */}
			</div>
			{/* <!-- Service Content End --> */}
        </div>
    </section>
    {/* <!--== Services Area End ==--> */}
    

    {/* <!--== Our Cars Area Start ==--> */}
    <section id="our-cars" className="section-padding">
        <div className="container">
            <div className="row">
                {/* <!-- Section Title Start --> */}
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Our cars</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>We have the best cars around africa</p>
                    </div>
                </div>
                {/* <!-- Section Title End --> */}
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="team-content">
                        <div className="row">
                            {/* <!-- OurCars Tab Menu start --> */}
                            <div className="col-lg-3">
                                <div className="ourcar-tab-menu">
                                    <ul className="nav nav-tabs" id="ourcartabmenu" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="ourcar_item_1" data-toggle="tab" href="#ourcar_1" role="tab" aria-selected="true">VW Golf VII</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="ourcar_item_2" data-toggle="tab" href="#ourcar_2" role="tab" aria-selected="true">Audi A1 S-LINE</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="ourcar_item_3" data-toggle="tab" href="#ourcar_3" role="tab" aria-selected="true">VW Golf VII</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="ourcar_item_4" data-toggle="tab" href="#ourcar_4" role="tab" aria-selected="true">Audi A1 S-LINE</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="ourcar_item_5" data-toggle="tab" href="#ourcar_5" role="tab" aria-selected="true">VW Golf VII</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- OurCars Tab Menu End --> */}

                            {/* <!-- OurCars Tab Content start --> */}
                            <div className="col-lg-9">
                                <div className="tab-content" id="ourcartabcontent">
                                    {/* <!-- Single OurCars  start --> */}
                                    <div className="tab-pane fade show active" id="ourcar_1" role="tabpanel" aria-labelledby="ourcar_item_1">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src={require("../../asset/img/car/car-5.jpg" )}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>N 7,540 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>4</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    <a href="#" className="bookbtn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single OurCars End --> */}

                                    {/* <!-- Single OurCars  start --> */}
                                    <div className="tab-pane fade" id="ourcar_2" role="tabpanel" aria-labelledby="ourcar_item_2">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src={require("../../asset/img/car/car-1.jpg")}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>N 7,590 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>4</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    <a href="#" className="bookbtn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single OurCars End --> */}

                                    {/* <!-- Single OurCars  start --> */}
                                    <div className="tab-pane fade" id="ourcar_3" role="tabpanel" aria-labelledby="ourcar_item_3">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src={require("../../asset/img/car/car-2.jpg")}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>N7,540 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>4</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    <a href="#" className="bookbtn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single OurCars End --> */}

                                    {/* <!-- Single OurCars  start --> */}
                                    <div className="tab-pane fade" id="ourcar_4" role="tabpanel" aria-labelledby="ourcar_item_4">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src={require("../../asset/img/car/car-3.jpg")}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>N7,540 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>4</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    <a href="#" className="bookbtn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single OurCars End --> */}

                                    {/* <!-- Single OurCars  start --> */}
                                    <div className="tab-pane fade" id="ourcar_5" role="tabpanel" aria-labelledby="ourcar_item_5">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src={require("../../asset/img/car/car-4.jpg")}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>N 7,540 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    <a href="#" className="bookbtn">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Single OurCars End --> */}
                                </div>
                            </div>
                            {/* <!-- OurCars Tab Content End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--== Our Cars Area End ==--> */}

    {/* <!--== Pricing Area Start ==--> */}
    <section id="pricing-area" className="section-padding overlay">
        <div className="container">
            <div className="row">
                {/* <!-- Section Title Start --> */}
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Only quality for clients</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        {/* <p>Meet our quality clients.</p> */}
                    </div>
                </div>
                {/* <!-- Section Title End --> */}
            </div>

            {/* <!-- Pricing Table Conatent Start --> */}
            <div className="row">
                {/* <!-- Single Pricing Table --> */}
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="single-pricing-table">
                        <h3>BUSINESS</h3>
                        <h2>N 55,990</h2>
                        <h5>PER MONTH</h5>

                        <ul className="package-list">
                            <li>FREE VEHICLE DELIVERY</li>
                            <li>WEDDINGS CELEBRATIONS</li>
                            <li>FULL INSURANCE INCLUDED</li>
                            <li>TRANSPORT ABROAD</li>
                            <li>ALL INCLUSIVE MINI BAR</li>
                            <li>CHAUFFER INCLUDED IN PRICE</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Single Pricing Table --> */}

                {/* <!-- Single Pricing Table --> */}
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="single-pricing-table">
                        <h3>Trial</h3>
                        <h2>Free</h2>
                        <h5>PER MONTH</h5>

                        <ul className="package-list">
                            <li>FREE VEHICLE DELIVERY</li>
                            <li>OTHER CELEBRATIONS</li>
                            <li>FULL INSURANCE</li>
                            <li>TRANSPORT ABROAD</li>
                            <li>MINI BAR</li>
                            <li>INCLUDED IN PRICE</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Single Pricing Table --> */}

                {/* <!-- Single Pricing Table --> */}
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="single-pricing-table">
                        <h3>standard</h3>
                        <h2>N 35,990</h2>
                        <h5>PER MONTH</h5>

                        <ul className="package-list">
                            <li>DELIVERY AT AIRPORT</li>
                            <li>WEDDINGS AND OTHER</li>
                            <li>FULL INCLUDED</li>
                            <li>TRANSPORT ABROAD</li>
                            <li>ALL MINI BAR</li>
                            <li>CHAUFFER PRICE</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Single Pricing Table --> */}
            </div>
            {/* <!-- Pricing Table Conatent End --> */}
        </div>
    </section>
    {/* <!--== Pricing Area End ==--> */}

    {/* <!--== Mobile App Area Start ==--> */}
    <div id="mobileapp-video-bg"></div>
    <section id="mobile-app-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="mobile-app-content">
                        <h2>SAVE 30% WITH THE APP</h2>
                        <p>Easy &amp; Fast - Book a car in 60 seconds</p>
                        <div className="app-btns">
                            <Link to="#"><i className="fa fa-android"></i> Android Store</Link>
                            <Link to="#"><i className="fa fa-apple"></i> Apple Store</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--== Mobile App Area End ==--> */}

    {/* <!--== Articles Area Start ==--> */}
    <section id="tips-article-area" className="section-padding">
        <div className="container">
            <div className="row">
                {/* <!-- Section Title Start --> */}
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Tips and articles</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Learn more about our tip and articles.</p>
                    </div>
                </div>
                {/* <!-- Section Title End --> */}
            </div>

            {/* <!-- Articles Content Wrap Start --> */}
            <div className="row">
                {/* <!-- Single Articles Start --> */}
                <div className="col-lg-12">
                    <article className="single-article">
                        <div className="row">
                            {/* <!-- Articles Thumbnail Start --> */}
                            <div className="col-lg-5">
                                <div className="article-thumb">
                                    <img src={require("../../asset/img/article/arti-thumb-1.jpg")}/>
                                </div>
                            </div>
                            {/* <!-- Articles Thumbnail End --> */}

                            {/* <!-- Articles Content Start --> */}
                            <div className="col-lg-7">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <div className="article-body">
                                                    <h3><Link to="article-details.html">We are committed to delivering a great customer experience</Link></h3>
                                            <div className="article-meta">
                                                <Link to="#" className="author">By :: <span>Admin</span></Link>
                                                <Link to="#" className="commnet">Comments :: <span>10</span></Link>
                                            </div>

                                            <div className="article-date">25 <span className="month">jan</span></div>

                                                <p>We treat all our customers with respect, and always offer honest and friendly advice. If you are in need of any tyre and auto services, trust the team at caride to deliver better prices, better tyres and better care, guaranteed. It’s why we’re one of Nigeria leading tyre and auto service providers</p>

                                            <Link to="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Articles Content End --> */}
                        </div>
                    </article>
                </div>
                {/* <!-- Single Articles End --> */}

                {/* <!-- Single Articles Start --> */}
                <div className="col-lg-12">
                    <article className="single-article middle">
                        <div className="row">

                            {/* <!-- Articles Thumbnail Start --> */}
                            <div className="col-lg-5 d-xl-none">
                                <div className="article-thumb">
                                    <img src={require("../../asset/img/article/arti-thumb-2.jpg")}/>
                                </div>
                            </div>
                            {/* <!-- Articles Thumbnail End --> */}

                            {/* <!-- Articles Content Start --> */}
                            <div className="col-lg-7">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <div className="article-body">
                                            <h3><Link to="article-details.html">At caride, we certainly know your car</Link></h3>
                                            <div className="article-meta">
                                                <Link to="#" className="author">By :: <span>Admin</span></Link>
                                                <Link to="#" className="commnet">Comments :: <span>10</span></Link>
                                            </div>

                                            <div className="article-date1">14 <br/><span className="month">feb</span></div>

                                                <p>We may have changed our name and had a slight facelift, but we’re as focused as ever on our customer experience. When you bring your car to caride you can rest assured that we have your best interests and safety at heart. We go out of our way to ensure that you leave completely satisfied, every time.</p>

                                            <Link to="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Articles Content End --> */}

                            {/* <!-- Articles Thumbnail Start --> */}
                            <div className="col-lg-5 d-none d-xl-block">
                                <div className="article-thumb">
                                    <img src={require("../../asset/img/article/arti-thumb-2.jpg")} />
                                </div>
                            </div>
                            {/* <!-- Articles Thumbnail End --> */}
                        </div>
                    </article>
                </div>
                {/* <!-- Single Articles End --> */}

                {/* <!-- Single Articles Start --> */}
                <div className="col-lg-12">
                    <article className="single-article">
                        <div className="row">
                            {/* <!-- Articles Thumbnail Start --> */}
                            <div className="col-lg-5">
                                <div className="article-thumb">
                                    <img src={require("../../asset/img/article/arti-thumb-3.jpg")} />
                                </div>
                            </div>
                            {/* <!-- Articles Thumbnail End --> */}

                            {/* <!-- Articles Content Start --> */}
                            <div className="col-lg-7">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <div className="article-body">
                                            <h3><Link to="article-details.html">We offer great services in car repair</Link></h3>
                                            <div className="article-meta">
                                                <Link to="#" className="author"> By :: <span>Admin</span></Link>
                                                <Link to="#" className="commnet"> Comments :: <span>10</span></Link>
                                            </div>

                                            <div className="article-date">17 <span className="month">feb</span></div>

                                            <p>CarRide is an on-demand car-ride-hailing services created with the vision to solve the transportation challenge of getting people and goods to their destination, in timely and safe fashion. CarRide featured in the web and mobile app</p>

                                            <Link to="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Articles Content End --> */}
                        </div>
                    </article>
                </div>
                {/* <!-- Single Articles End --> */}
            </div>
            {/* <!-- Articles Content Wrap End --> */}
        </div>
    </section>
    {/* <!--== Articles Area End ==--> */}

      </div>
    )
  }
}
