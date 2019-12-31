import React, { Component } from 'react'
import SiderBar from '../siderBar'
import GallaryCard from '../GallaryCard'
import './userd.css'


export default class userDashboard extends Component {
  constructor(props) {
  super(props);
  this.state = {};
 }
  
  render() {
    return (
      <div>

        <div className=' container-fluid vh-65'>
        <div className='row '>
            <div className=' col-xs-12  col-sm-12  col-md-4  col-lg-4  col-xl-3'><div className='flex'><SiderBar/></div></div>
            <div className='col-xs-12  col-sm-12  col-md-8  col-lg-8  col-xl-9'><div className='text-center bg-light  vh-100'><GallaryCard/></div>
          </div>
        </div>
      </div> 

      </div>
    )
  }
}
