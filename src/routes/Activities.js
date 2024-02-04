import React from 'react'



import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Activities.css'


import atfel1 from '../assets/IMG_3050.jpg'
import atfel2 from '../assets/IMG_3131.jpg'
import atfel3 from '../assets/IMG_3237.jpg'
import atfel4 from '../assets/IMG_3168.jpg'


import wieday1 from '../assets/wieday1.jpg'
import wieday2 from '../assets/wieday2.jpg'
import wieday31 from '../assets/wieday31.jpg'
import wieday32 from '../assets/wieday32.jpg'
import wieday33 from '../assets/widay33.jpg'


import cs2 from '../assets/cs2.jpg'
import cs3 from '../assets/cs3.jpg'
import cs4 from '../assets/cs4 .jpg'
import cs5 from '../assets/cs5.jpg'


import hay1 from '../assets/hay1.jpg'
import hay3 from '../assets/hay3.jpg'
import hay4 from '../assets/hay4.jpg'



import both2 from '../assets/both2.jpg'
import both1 from '../assets/both1.jpg'



import val1 from '../assets/val1.jpg'
import val2 from '../assets/val2.jpg'


import ram1 from '../assets/ram1.jpg'
import ram2 from '../assets/ram2.jpg'
import ram3 from '../assets/ram3.jpg'


import ift1 from '../assets/ift1.jpg'
import ift3 from '../assets/ift3.jpg'



import { useEffect } from 'react';




const activitiesData = [
  
  {
    title: 'WIE GATHER (WIE DAY)',
    description: (
      <>
        <p>To celebrate the WIE DAY , we organize a 3 day-event which will be about:</p>
  
        <ul className="star-list">
          <li className="star">Day1:</li>
          <p>The event starts with an opening ceremony celebrating women in engineering. We then explore the use of Machine Learning (ML) in addressing climate change challenges. </p>
          <li className="star">Day2:</li>
          <p>Workshop on Crypto and NFT A workshop introduces attendees to cryptocurrencies and Non-Fungible Tokens (NFTs). Participants learn about blockchain, decentralized finance, and their potential applications in engineering. </p>
          <li className="star">Day3:</li>
          <p> Panel Discussion on Women Empowerment and Gender in Climate Change The final day features a panel discussion on women's empowerment and gender in climate change.</p>
        </ul>
      </>
    ),
    
    images: [wieday1,wieday2,wieday31,wieday32,wieday33]

  },
  {
    title: "GIT AND GITHUB WORKSHOP"  ,
    description: "In the first of many to come technical activities to sprout from the IEEE ENIS WIE SAG, the IEEE ENIS Computer Society has seen it fit to collaborate with the empowered women in their university. Being a fundamental part in a professional IT environment, we saw it fit that we organize a Git and GitHub workshop. We have contacted Mr. Kadhem Belguith, a YP member and Engineer at OliveSoft, who graciously accepted to host this training session. The latter took place in the Youth Complex of Sfax on the 5th of march from 10 AM till 12 PM. Students appreciated the insights of our coach regarding teamwork in a professional environment and how Git and GitHub are a fundamental part of a group's workflow. ",
    images: [cs2,cs3,cs4,cs5],
  },
  {
    title: "A VISIT TO THE ANIMAL PROTECTION ASSOCIATION    "  ,
    description: "On May 31st, the IEEE WIE Student Affinity Group ENIS embarked on a heartwarming visit to the Animal Protection Association - APA SFAX Tunisia. With joy in our hearts, we spent time with the animals and provided them with a nourishing lunch. This visit left an indelible impact on us, as we witnessed firsthand the dedication and compassion of the APA SFAX team towards animal welfare. Their noble cause serves as an inspiration for us all. This visit has taught us valuable lessons and allowed us to create unforgettable moments with these incredible animals. Together, we can make a difference in their lives and strive towards a future where every animal finds a loving forever home. ",
    images: [hay1,hay3,hay4],
  },
  {
    title: "DONATION BOOTH "  ,
    description: "On February 13th and 14th, our IEEE ENIS WIE SAG team organized a booth at ENIS to collect money  for poor and needy children as part of our charity initiative. Our goal was to bring happiness and joy to these children by providing them with gifts and showing them that they are not alone. The generous contributions of the students made the booth a pleasant experience, and we felt a sense of unity in working together towards a common goal. Witnessing the students' eagerness to make a positive impact in the community was truly inspiring. We hope that this initiative will encourage more people to contribute to making a difference in the lives of those in need. We take pride in spreading happiness and joy among these children, and we look forward to continuing our efforts as a team in the future.    ",
    images: [both1,both2],
  },
  {
    title: "BLIND DATE SHOW  "  ,
    description: "On Valentine's Day, our group organized a memorable Blind Date Show at ENIS. It was filled with love, laughter, and cherished memories, fostering deeper bonds among attendees. The lively karaoke session further elevated the spirit of the day, leaving an indelible mark on our hearts. Building upon this success, we initiated a heartfelt endeavor: introducing a donation money box to enhance future events. The funds collected will be used to purchase gifts for needy children, spreading love and compassion to those in need. Together, let's brighten the Valentine's Day of those who need it most. ",
    images: [val1,val2],
  },
  {
    title: "ATFEL BOURGUIBA"    ,
    description: 'IEEE ENIS WIE SAG organized a successful humanitarian activity, bringing joy to the children at "Atfal Bourguiba" through energetic dancing, engaging workshops, and a unique coloring book. We are dedicated to making a positive impact on our community and eagerly anticipate future opportunities to spread joy, knowledge, and hope to those in need.',
    images: [atfel3, atfel2, atfel1,atfel4],
  },
  {
    title: "KOFFET RAMADAN"  ,
    description: "In preparation for the month of Ramadan, the IEEE ENIS WOMEN IN ENGINEERING Affinity Group, in collaboration with Baya Association, organized the 'Koffet Ramadan' initiative on 22nd March. This initiative aimed to collect donations and purchase essential food and supplies for Tunisian families in need during Ramadan. By embodying the spirit of Ramadan as a month of responsibilities, charity, goodness, generosity, and helping others, we express our heartfelt appreciation to every individual who contributed to the success of this initiative. Our gratitude also extends to Baya Association and its dedicated members who devoted their time and effort to make this act possible. We are particularly grateful to Sirine Chaari for her invaluable help and guidance in bringing this marvelous initiative to life.",
    images: [ram1,ram2,ram3],
  },
  {
    title: "Iftar party "  ,
    description: "On Tuesday, April 11th, the IEEE ENIS WOMEN IN ENGINEERING Affinity Group organized a delightful Iftar party for the IEEE ENIS Family. The event was filled with joy, laughter, and unforgettable moments as members gathered together to break their fast and enjoy a delicious meal. The atmosphere was further enhanced by engaging in friendly card games and other activities, fostering a sense of camaraderie and strengthening the bond between all chapters. We are grateful to everyone who participated, as your presence made the event truly special. The Iftar party served as a wonderful opportunity to create lasting connections and build a strong relationship within the IEEE ENIS community.",
    images: [ift1,ift3],
  },
  // Add more activities here...
];

const Activities = () => {
  
  useEffect(() => {
    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle the scroll event
    const handleScroll = () => {
      const elementsToAnimate = document.querySelectorAll('.animate-slide');
      elementsToAnimate.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('animate-slide-active'); // Add the class to trigger the animation
        }
      });
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
        <Navbar/>
        <HeroImage heading='Discover our club activities!'/>
        <div className='contain'>
        <div className="activities-container">
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      
    {activitiesData.map((activity, index) => (
  <div key={index} className="activity">
    <div className="activity-description animate-slide"> {/* Add animate-slide class here */}
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
    </div>
          <div className="activity-slider">
            <Slider {...imageSliderSettings}>
              {activity.images.map((image, i) => (
                <div key={i} className="activity-slide">
                  <img src={image} alt={`Activity ${index + 1} Image ${i + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


        <Footer/>
        </div>

    </div>
  )
}

export default Activities