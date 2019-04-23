import React, { useState } from 'react';

import '../styles/banner.scss';

const Banner = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className='banner'>
      <div className='container'>
        <div className='nav-wrapper'>
          <div className='logo'>SIMI</div>
          <div className='nav-list'>
            <button className='navbar-toggler collapsed' type='button' onClick={() => setDisplay(!display)}>
              <i className="fas fa-bars"></i>
            </button>
            <div className='navbar-list'>
              <ul className='navbar-nav collapse'>
                <li className='menu-item'>Home</li>
                <li className='menu-item'>About</li>
                <li className='menu-item'>Education</li>
                <li className='menu-item'>Services</li>
                <li className='menu-item'>Contact</li>
              </ul>
          </div>
          </div>
        </div>
        <div className={`navbar-list-mobile ${display}`}>
            <ul className='navbar-nav'>
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
}

export default Banner;
