import React from "react";
import "./contactform.css";

const ContactForm = () => {
  return (
    <div className="right-side">
      <div className="form-container">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea
          className="message-box" // Add a class for styling
          placeholder="Your Message"
        ></textarea>
        <button className="send-button" style={{ backgroundColor: "#772583" }}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;