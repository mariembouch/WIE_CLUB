import React, { useState } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../assets/logo1.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='navbar-container'>
      <div className='navbar'>
      <Link to='/' className='logo'>
        
          <img src={logoImage} alt='Logo' />
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About us'>About us</Link>
          </li>
          <li>
            <Link to='/Activities'>Activities</Link>
          </li>
          <li>
            <Link to='/Events'>Events</Link>
          </li>
         
         
        </ul>
        <div className='biefbrger' onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#fff' }} />
          ) : (
            <FaBars size={20} style={{ color: '#fff' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
