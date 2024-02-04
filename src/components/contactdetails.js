import React from "react";
import "./contactdetails.css";
import location from "../assets/location (1).png";
import phone from "../assets/phone-call (1).png";
import email from "../assets/email.png";

const ContactDetails = () => {
  return (
    <div className="left-side">
      <div className="organization-details">
      <br/>
      <br/>

        <h1 style={{ color: "#772583", fontSize: "36px" }}>
          Get in touch with us
        </h1>
        <br/>
        <br/>

        

        <div className="detail">
          <img src={location} alt="Location Icon" />
          <h4 style={{ color: "#772583", fontSize: "24px" }}>Our Location:</h4>
          <p>Route Soukra km 3 B.P.1173.Sfax.3038, Tunisia</p>
        </div>
        <br/>

        <div className="detail">
          <img src={phone} alt="Phone Icon" />
          <h4 style={{ color: "#772583", fontSize: "24px" }}>Phone Number:</h4>
          <p>51474406</p>
        </div>
        <br/>

        <div className="detail">
          <img src={email} alt="Email Icon" />
          <h4 style={{ color: "#772583", fontSize: "24px" }}>Email Address:</h4>
          <p>kallel.manel@ieee.org</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
