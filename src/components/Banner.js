import React from 'react';

import '../styles/banner.scss';

const Banner = () => (
  <div className='banner'>
    <div className='container'>
      <div className='logo'>SIMI</div>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars"></i>
      </button>
      <div className='navbar'>
        <ul className='navbar-nav collapse' id='navbarCollapse'>
          <li className='menu-item'>Home</li>
          <li className='menu-item'>About</li>
          <li className='menu-item'>Education</li>
          <li className='menu-item'>Services</li>
          <li className='menu-item'>Contact</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Banner;
