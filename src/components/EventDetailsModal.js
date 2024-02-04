// EventDetailsModal.js
import React from "react";
import "./EventDetailsModal.css";

const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <button className="close-button" onClick={onClose}>
          &#10005;
        </button>
      </div>
      <div className="modal-content">
        <img src={event.image} alt={event.name} className="modal-image" />
        <h2>{event.name}</h2>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p className="description">
          {/* Add your description content here */}
          Honoring the past...inspiring the future
          {/* Rest of the description */}
        </p>
        {/* Add more event details here */}
      </div>
    </div>
  );
};

export default EventDetailsModal;