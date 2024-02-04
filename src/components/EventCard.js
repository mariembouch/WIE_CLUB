// src/components/EventCard.js
import React, { useState } from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="container">
      {" "}
      {/* Add a container div */}
      <div
        className={`event-card ${isExpanded ? "expanded" : ""}`}
        onClick={handleCardClick}
      >
        <div className="event-image-container">
          <img
            src={event.image}
            alt={event.name}
            className={`event-image ${isExpanded ? "expanded" : ""}`}
          />
        </div>
        <div className="event-info">
          <h2>{event.name}</h2>
          {event.date && <p>Date: {event.date}</p>}
          {event.location && <p>Location: {event.location}</p>}
          {event.isUpcoming ? (
            <button className="register-button">Register</button>
          ) : (
            <p>Event Details: {event.details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;