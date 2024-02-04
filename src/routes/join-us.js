import React from 'react'


import './join.css';


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'

const JoinUs = () => {
  return (
    <div>
        
        <Navbar/>
        <HeroImage heading='Join us '/>


    <div className="join-us-page">
<br/><br/>

      <div className="intro-section">
        <h2>Welcome to our community! Join us to...</h2>
      </div>


      <div className="benefits-section">
      <br/><br/>
      
        <h1> Experience Our Benefits with a Free Membership </h1>
        <br/><br/>
        <ul> 
          <li>Exclusive access to workshops and events</li>
          <li>Networking with like-minded individuals</li>
          <li>Opportunity to learn new skills</li>
          {/* Add more benefits */}
        </ul>
      </div>
      <div className="application-section">
        <h2>Ready to Join our upcoming activity ?</h2>
        <form>
          {/* Add form fields for name, email, etc. */}
          <button type="submit">Click to Fill  the form</button>
        </form>
      </div>
      <div className="application-section">
        <h2>Ready to Join our upcoming event ?</h2>
        <form>
          {/* Add form fields for name, email, etc. */}
          <button type="submit">Click to Fill  the form</button>
        </form>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out...</p>
        
      </div>
    </div>
    <br/>    <br/>
    <br/>      <br/>    <br/>
    <br/>
    <br/>    <br/>
    <br/>   <br/>    <br/>
    <br/>   <br/>    <br/>
    <br/>



export default JoinUsPage;
          <Footer/>
    </div>
  )
}

export default JoinUs