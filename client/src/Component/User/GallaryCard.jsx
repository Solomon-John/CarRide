import React, { Component } from 'react'
import './Gallary.css'

export default class GallaryCard extends Component {
  render() {
    return (
      <div>
    
        <div id='flex'>
          <div id="main-wrapper">
            <div className="main-content">
              <section id="welcame">
                <div className="content-header">
                  <h1>Welcome to CarRide</h1>
                </div>
                <div className="welcame">
                  <p id='mas'>Firstly, a huge thanks for benig part of our company, your support is truly appreciated!</p>

                  <p>This Company CarRide is an on-demand car-ride-hailing services created with the vision to solve the transportation challenge of getting people and goods to their destination, in timely and safe fashion. CarRide featured in the web and mobile app. </p>
                </div>

              </section>
            </div>
        <div className= "container">
          <div className='row'>
          <div className="card" id='cards'  style={{ width: '18rem' }} >
            <img src={require("../../asset/img/car-wash.jpg")} className="card-img-top" alt='imag' />
                <div className="cards-body">
                  <h4 className="card-title">CAR WASH</h4>
                <button className="btn btn-success"><i className='fa fa-phone'> Call us</i></button>
                </div>
            </div>
            <div className="card" id='cards' style={{ width: '18rem' }} >
             <img src={require("../../asset/img/we-do/service1-img.png")} className="card-img-top" alt='imag' />
              <div className="cards-body">
                    <h4 className="card-title">TAXI/DRIVER</h4>
                    <button className="btn btn-success"><i className='fa fa-phone'> Call us</i></button>
              </div>
            </div>

          <div className="card" id='cards' style={{ width: '18rem' }} >
            <img src={require("../../asset/img/article/arti-thumb-3.jpg")} className="card-img-top" alt='imag' />
            <div className="cards-body">
              <h4 className="card-title">CAR REPAIR </h4>
                    <button className="btn btn-success"><i className='fa fa-phone'> Call us</i></button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      
      </div>
    )
  }
}
