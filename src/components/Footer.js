import React, { useState } from 'react';
import './FooterStyle.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ieee from '../assets/ieee.png';
import regimLogo from '../assets/regim lab.png';
import sig from '../assets/sig.png';
import adel from '../assets/adel.jpg';
import maryem from '../assets/member2.jpg';
import ons from '../assets/member3.jpg';
import manel from '../assets/manel.jpg'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='footer'>
        <div className='social'>
          <a href='https://www.facebook.com/IEEE.WIE.ENIS.SAG'target="_blank" rel="noopener noreferrer">
          <FaFacebook className='icon1' />
          </a>
          <a href='https://www.linkedin.com/company/wie-student-affinity-group-enis/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='icon2' />
          </a>
          <FaInstagram className='icon3' />
        </div>
      </div>
      
      <a href="https://www.facebook.com/groups/493292758838882/" target="_blank" rel="noopener noreferrer">
  <img src={ieee} alt='IEEE Logo' className='ieee' />
</a>

<a href="https://enis.rnu.tn/fra/pages/399/ReGIM-Lab.-REsearch-Groups-in-Intelligent-Machines-(LR11ES48)" target="_blank" rel="noopener noreferrer">
  <img src={regimLogo} alt='Regim Logo' className='regim' />
</a>

      <img src={sig} alt='sig' className='sig' onClick={openModal} />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>This website was created by MOM, which is a group of three people: Bouchaala Maryam, Manel Kallel, and Ons Tounsi. They developed it during their summer internship supervised by Adel Alimi under the laboratory "Regim Lab."</p>
            <div className="image-container">
              <div className="person-group">
                <div className="person">
                  <img src={maryem} alt='créateur' className='ieee12' />
                  <p>Maryam Bouchaala</p>
                  <div className="icons">
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
                <div className="person">
                  <img src={ons} alt='creator' className='regim12' />
                  <p>Ons Tounsi</p>
                  <div className="icons">
                    <a href="link_to_linkedin_profile" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="link_to_fb_page" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
                <div className="person">
                  <img src={manel} alt='creator' className='sig12' />
                  <p>Manel Kallel</p>
                  <div className="icons">
                    <a href="link_to_linkedin_profile" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="link_to_fb_page" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>
              <div className="person-group">
                <div className="person">
                  <img src={adel} alt='supervisor' className='sig12' />
                  <p>Adel Alimi</p>
                  <div className="icons">
                    <a href="link_to_linkedin_profile" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="link_to_fb_page" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
                <div className="person">
                  <a href="link_to_regim_lab" target="_blank" rel="noopener noreferrer">
                    <img src={regimLogo} alt='logolab' className='regim12' />
                  </a>
                  <p>Regim Lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
