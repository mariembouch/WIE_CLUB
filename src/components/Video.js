import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import wieVideo from '../assets/wie.mp4'
const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
          <  source src={wieVideo} type='video/mp4'/>
        </video>
        <div className='content'>
        <h2> welcome to our family  </h2>
        <h1>  WIE IEEE ENIS SB </h1>
        <div>
            <Link to='/JoinUs' className='btn'>join us</Link>
             <Link to='/ContactUs' className='btn btn-light'>contact us</Link>
        </div>
        </div>
        </div>



  )
}

export default Video