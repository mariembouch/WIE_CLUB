

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'


// src/App.js
import React, { useState } from "react";
import EventDetailsModal from "../components/EventDetailsModal";

import EventCard from "../components/EventCard";
import wieact2 from "../assets/wieact2.png";
import wieact1 from "../assets/wieact1.jpg";
import thinkpink4 from "../assets/thinkpink4.jpg";
import staytuned from "../assets/staytuned.png";
const events = [
  {
    name: "WIE ACT 2.0",
    image: wieact2,
    date: "2023-09-30",
    location: "Sousse",
    isUpcoming: true,
  },
  {
    name: "Upcoming Event",
    image: staytuned,
    date: "2023-??-??",
    location: "stay tuned",
    isUpcoming: true,
  },
  {
    name: "Think Pink 5.0",
    image: staytuned,
    date: "2023-11-01",
    location: "ENIS",
    details:
      "Our 5th edition of the participation in a global effort to raise awareness on breast cancer",
    isUpcoming: true,
  },
  {
    name: "Think Pink 4.0",
    image: thinkpink4,
    date: "2022-11-02",
    location: "ENIS",
    details:
      "Our 4th edition of the participation in a global effort to raise awareness on breast cancer",
    isUpcoming: false,
  },
  {
    name: "WIE ACT 1.0",
    image: wieact1,
    date: "2022-10-01",
    location: "Orient palace hotel SOUSSE, Sousse Tunisia",
    details: "WOMAN IN ENGINEERING ANNUAL CONGRESS OF TUNISIA",
    isUpcoming: false,
  },
];
const Events = () => {

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };
  return (
    <div>
        
        <Navbar/>
        <HeroImage heading='Discover our club events!'/>
        <div className="App">
      {events.map((event, index) => (
        <EventCard
          key={index}
          event={event}
          onClick={() => handleCardClick(event)}
        />
      ))}
      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
          <Footer/>
    </div>
  )
}

export default Events














