import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style/header.css'

function Header() {
  return (
      <ul className='gnb_wrap'>
        <Link to="/">
          <li className='top'>Home</li>
        </Link>
        <Link to="/about">
          <li className='top'>About</li>
        </Link>
        <Link to="/project">
          <li className='top'>Project</li>
        </Link>
        <Link to="/contact">
          <li className='top'>Contact</li>
        </Link>
      </ul>
  );
}

export default Header;
