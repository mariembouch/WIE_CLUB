import React from 'react'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'


import ContactDetails from "../components/contactdetails";
import ContactForm from "../components/contactform";

import './contactUs.css'


const ContactUs = () => {
  return (
    <div>
        
        <Navbar/>
        <HeroImage heading='Contact Us'/>
        <br/>

        <br/>
        <br/>
        <br/>

        <div className="app-container">
      <ContactDetails />
      <ContactForm />
    </div>
    <br/>
        <br/>
        <br/>
      <Footer />
    </div>
  );
};
          
   
export default ContactUs

