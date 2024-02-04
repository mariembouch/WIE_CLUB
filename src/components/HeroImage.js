import React, { Component } from 'react'
import './HeroImgStyles.css'
import { Link } from 'react-router-dom'

class ActivitiesImage extends Component {
  render() {
    return (
      <>
      <div className='hero-img'>
         <div className='heading'>
            <h4> {this.props.heading}</h4>
            <h3>And gain the opportunity to...</h3>

            <div>
              <div className='btn-container'>
          <Link to='/JoinUs' className='btn'>
            join us
          </Link>
          <Link to='/ContactUs' className='btn btn-light'>
            contact us
          </Link>
        </div>
     </div>
        </div>
        </div>
        
     </>
    )
  }
}

export default ActivitiesImage