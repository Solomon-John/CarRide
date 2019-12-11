import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class carPages extends Component {
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
                  <h2>Our Cars</h2>
                  <span className="title-line"><i className="fa fa-car" /></span>
                  <p>Welcome, we provide the best cars in africa.</p>
                </div>
              </div>
              {/* Page Title End */}
            </div>
          </div>
        </section>
        {/*== Page Title Area End ==*/}
        {/*== Car List Area Start ==*/}
        <section id="car-list-area" className="section-padding">
          <div className="container">
            <div className="row">
              {/* Car List Content Start */}
              <div className="col-lg-12">
                <div className="car-list-content">
                  <div className="row">
                    {/* Single Car Start */}
                    <div className="col-lg-6 col-md-6">
                      <div className="single-car-wrap">
                        <div className="car-list-thumb car-thumb-1" />
                        <div className="car-list-info without-bar">
                          <h2><Link to='#'>Aston Martin One-77</Link></h2>
                          <h5>39$ Rent /per a day</h5>
                          <p>Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean inorci luctus et ultrices posuere cubilia.</p>
                          <ul className="car-info-list">
                            <li>AC</li>
                            <li>Diesel</li>
                            <li>Auto</li>
                          </ul>
                          <p className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star unmark" />
                          </p>
                          <Link className="rent-btn" to='#'>Book It</Link>
                        </div>
                      </div>
                    </div>
                    {/* Single Car End */}
                    {/* Single Car Start */}
                    <div className="col-lg-6 col-md-6">
                      <div className="single-car-wrap">
                        <div className="car-list-thumb car-thumb-2" />
                        <div className="car-list-info without-bar">
                          <h2><Link to='#'>Aston Martin One-77</Link></h2>
                          <h5>39$ Rent /per a day</h5>
                          <p>Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean inorci luctus et ultrices posuere cubilia.</p>
                          <ul className="car-info-list">
                            <li>AC</li>
                            <li>Diesel</li>
                            <li>Auto</li>
                          </ul>
                          <p className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star unmark" />
                          </p>
                          <Link className="rent-btn" to='#'>Book It</Link>
                        </div>
                      </div>
                    </div>
                    {/* Single Car End */}
                    {/* Single Car Start */}
                    <div className="col-lg-6 col-md-6">
                      <div className="single-car-wrap">
                        <div className="car-list-thumb car-thumb-3" />
                        <div className="car-list-info without-bar">
                          <h2><Link to='#'>Aston  Martin One-77</Link></h2>
                          <h5>39$ Rent /per a day</h5>
                          <p>Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean inorci luctus et ultrices posuere cubilia.</p>
                          <ul className="car-info-list">
                            <li>AC</li>
                            <li>Diesel</li>
                            <li>Auto</li>
                          </ul>
                          <p className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star unmark" />
                          </p>
                          <Link className="rent-btn" to='#'>Book It</Link>
                        </div>
                      </div>
                    </div>
                    {/* Single Car End */}
                    {/* Single Car Start */}
                    <div className="col-lg-6 col-md-6">
                      <div className="single-car-wrap">
                        <div className="car-list-thumb car-thumb-4" />
                        <div className="car-list-info without-bar">
                          <h2><Link to='#'>Aston Martin One-77</Link></h2>
                          <h5>39$ Rent /per a day</h5>
                          <p>Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean inorci luctus et ultrices posuere cubilia.</p>
                          <ul className="car-info-list">
                            <li>AC</li>
                            <li>Diesel</li>
                            <li>Auto</li>
                          </ul>
                          <p className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star unmark" />
                          </p>
                          <Link className="rent-btn" to='#'>Book It</Link>
                        </div>
                      </div>
                    </div>
                    {/* Single Car End */}
                  </div>
                </div>
                {/* Page Pagination Start */}
                <div className="page-pagi">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                      <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                    </ul>
                  </nav>
                </div>
                {/* Page Pagination End */}
              </div>
              {/* Car List Content End */}
            </div>
          </div>
        </section>
        {/*== Car List Area End ==*/}
      </div>
    )
  }
}
