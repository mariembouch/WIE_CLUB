import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AboutUs.css';
import manelPhoto from '../assets/manel.jpg';
import member1Photo from '../assets/member1.jpg';
import member2Photo from '../assets/member2.jpg';
import member3Photo from '../assets/member3.jpg';
import member4Photo from '../assets/member4.jpg';
import member5Photo from '../assets/member5.jpg';
import member6Photo from '../assets/member6.jpg';
import HeroImage from '../components/HeroImage'
import affinity from '../assets/affinity.png'
import ieeeenis from '../assets/ieeeenis.png'








const AboutUs = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(index);
  };

  const teamMembers = [
    {
      name: 'KALLEL Manel',
      photo: manelPhoto,
      linkedin: 'https://www.linkedin.com/in/manel-kallel-8648a2247/?fbclid=IwAR1v7dHxP5oQVChJiVkPIvEzs0Xfh5_mfjaJxNHLN8I8n5agaQbOAMSZNNU',
      facebook: 'https://www.facebook.com/manel.kallel2',
      description: 'Manel KALLEL a second year Computer Engineering Student at ENIS. I’ m the chairwoman of women in engineering and event manager of WIE ACT 2.0 .',
    },
    {
      name: 'JALLELI Nadine',
      photo: member1Photo,
      linkedin: 'https://www.linkedin.com/in/jellali-nadine  ',
      facebook: 'https://www.facebook.com/nadine.jellali',
      description: 'My name is Nadine Jellali and I am a second year Computer Engineering Student at ENIS. I’ m the vice chair of women in engineering , event manager of WIE ACT 2.0 and the general secretary in industrial society application .',
    },
    {
      name: 'BOUCHAALA Mariem',
      photo: member2Photo,
      linkedin: 'https://www.linkedin.com/in/bouchaala-mariem-89953b282/',
      facebook: 'https://www.facebook.com/profile.php?id=100081824635339',
      description: 'Iam Mariem Bouchaala, a second-year Computer Engineering student at ENIS. Currently, I hold the positions of secretary at the Women in Engineering (WIE) chapter and event manager for WIE ACT 2.0. ',
    },
    {
      name: 'TOUNSI Ons',
      photo: member3Photo,
      linkedin: 'https://www.linkedin.com/in/manel-kallel-8648a2247/?fbclid=IwAR1v7dHxP5oQVChJiVkPIvEzs0Xfh5_mfjaJxNHLN8I8n5agaQbOAMSZNNU',
      facebook: 'https://www.facebook.com/ons.tounsi24',
      description: 'I am Ons Tounsi, a second-year computer engineering student at ENIS, and I proudly serve as the Project Manager for IEEE Women in Engineering (WIE) sponsoring manager of WIE ACT 2.0 .',
    },
    {
      name: 'GOUIA mouhammed',
      photo: member4Photo,
      linkedin: 'https://www.linkedin.com/in/team_member2/',
      facebook: 'https://www.facebook.com/mahdi.gouiaa.7',
      description: 'My name is Mohammed Mahdi Gouiaa and I am a second year Computer Engineering student at the National School of Engineering of Sfax. I haveve grown to be a valued and active member in IEEE. I am renowned for my design skills which lead me to join the Women In Engineering Student Affinity Group in ENIS and Iam the webmaster of WIE ACT 2.0 .',
    },
    {
      name: 'MANNAI sirine',
      photo: member5Photo,
      linkedin: 'https://www.linkedin.com/in/sirine-mannai?fbclid=IwAR2P3Y2nG5p0EA98YfclCp5JpAvQCtdLMmk7HoinxGV-cEASIh_MZDK7nr4',
      facebook: 'https://www.facebook.com/sii.ryyne.3',
      description: ' My name is Sirine Manai and I am a second year Computer Engineering Student at ENIS. I’ m the Treasurer Of Women in Engineering and Treasurer of WIE ACT 2.0  .',
    },
    {
      name: 'HAMED mariem',
      photo: member6Photo,
      linkedin: 'https://www.linkedin.com/in/mariem-hamed-707063263?fbclid=IwAR3e3WINpB031zuHXSZHS-a-guQd6WpDNNymwJo-5kXLWSZ141Hx-1_pUHU',
      facebook: 'https://www.facebook.com/profile.php?id=100010467465569&mibextid=ZbWKwL',
      description: 'My name is Mariem HAMED , a biological engineering student at ENIS and a media manager at WIE ENIS and at WIE ACT 2.0. I  joined WIE because I am so interested in humanitarian work',
    },
   
    
  ];

  return (
    <div>
          <Navbar/>
          <HeroImage heading="Getting to Know Us Better!" />
          <br/><br/><br/>
<div className='about-us-container'>
        <div className="column-2">
        <h2>About Us</h2>
          <p>IEEE Women in Engineering (WIE) stands as the preeminent global professional organization, committed to championing women engineers and scientists on an international scale. Our unwavering mission is to inspire, engage, encourage, and empower women across the globe who are part of the IEEE community. By fostering an inclusive and supportive environment, we aim to break barriers and create opportunities that enable women to thrive in the fields of engineering and technology.


</p>   

        </div>
        <div class="column-2 large-profile">
        <img src={affinity }  />

  </div>

  <div className="column-3">
        <h2> WIE Affinity Group  ENIS SB </h2>
          <p>The WIE Student Affinity Group at ENIS, established on February 24, 2010, serves as a vital catalyst for change on the local level. Through a range of initiatives, workshops, and mentorship programs, we strive to empower young minds and equip them with the skills and confidence they need to thrive in their academic pursuits and future careers. By nurturing talent and cultivating leadership, we lay the groundwork for a new generation of trailblazers, ready to shape the future of engineering and leave an indelible mark on the world.

Together, we are building a vibrant and supportive community, driven by shared values of excellence, innovation, and gender equity. As we embark on this journey, we invite both women and men to stand beside us, championing the cause of diversity and collaboration in engineering and technology. 



        

</p>   


        </div>
        <div className="column-3 large-profile3">
  <img src={ieeeenis} alt="IEEEEnis" />
  
</div>


       
        <div className="meet-the-team-section">
          <h2>Meet Our Team</h2>
          <p>
          Our team takes pride in the strong sense of unity and camaraderie that defines us. We are more than just a group; we are a tightly-knit community where everyone's contribution is valued, and each member is considered special. The collective efforts of our team are what drive us forward, as we embrace the spirit of collaboration and inclusivity.
Each member brings something unique to the table, making our team a diverse tapestry of talents, skills, and ideas. We celebrate individuality and encourage everyone to showcase their strengths while supporting each other in areas where we can grow.
Our team's success is built on the foundation of mutual respect, trust, and shared goals. We work together seamlessly, recognizing that we are at our best when we collaborate and leverage each other's expertise. This collaborative spirit extends to our bureau members who go above and beyond to ensure the smooth functioning of our organization.

            
          </p>
          <div className="team-cards">
            <div className={`team-card large-card ${expandedCard === 0 ? 'expanded' : ''}`} onClick={() => handleCardClick(0)}>
              <img src={teamMembers[0].photo} alt={teamMembers[0].name} />
              <div className="card-details">
                <h3>{teamMembers[0].name}</h3>
                <div className="social-links">
                  <a href={teamMembers[0].linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={teamMembers[0].facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
              </div>
            </div>
            {teamMembers.slice(1, 2).map((member, index) => (
              <div className={`team-card left-card ${expandedCard === index + 1 ? 'expanded' : ''}`} key={index + 1} onClick={() => handleCardClick(index + 1)}>
                <img src={member.photo} alt={member.name} />
                <div className="card-details">
                  <h3>{member.name}</h3>
                  <div className="social-links">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
            ))}
              {teamMembers.slice(2).map((member, index) => (
              <div className={`team-card right-card ${expandedCard === index + 4 ? 'expanded' : ''}`} key={index + 4} onClick={() => handleCardClick(index + 4)}>
                   <img src={member.photo} alt={member.name} />
                <div className="card-details">
                  <h3>{member.name}</h3>
                  <div className="social-links">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-us-section">
          <h2>Why Us?</h2>
          <p>Welcome to the WIE IEEE ENIS SB ! Our club is a vibrant community that embraces both technical and non-technical activities, providing a platform for members to engage in diverse and enriching experiences. Whether you are a technology enthusiast, an aspiring engineer, or simply someone who loves to explore new horizons, there's something for everyone here. From organizing workshops, hackathons, and technical seminars to hosting social events, volunteering activities, and networking sessions, we strive to create a dynamic environment where members can learn, collaborate, and grow together. So, if you're wondering how we foster this spirit of camaraderie among our members and what makes our club special, join us, and let's embark on an exciting journey of innovation, knowledge sharing, and fun-filled moments together!

</p>
<br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
        
          <Footer/>
    </div>
    </div>
  )
}

export default AboutUs
