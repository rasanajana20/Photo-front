import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  
  const navigate = useNavigate();

  return (
    <div className='header_container'>
      <div className='header_logo' onClick={() => navigate('/body')}>Home</div>
      <div className='header_navbar'>
        <span onClick={() => navigate('/gallery')}>Gallery</span>
        <span onClick={() => navigate('/contact')}>Contact</span>
        <span onClick={() => navigate('/signup')}>LogOut</span> 
      </div>
    </div>
  );
}

export default Header;
