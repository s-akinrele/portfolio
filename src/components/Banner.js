import React from 'react';
import '../styles/banner.scss';

const Banner = () => {
  const letChat = () => {
    window.open('mailto:akinrelesimi@gmail.com', '_blank');
  }

  return (
    <header className="banner">
      <div className="title">Simi</div>
      <nav>
        <ul>
          <li className='menu-item active'>Home</li>
          <li className='menu-item'>About</li>
          <li className='menu-item'>Education</li>
          <li className='menu-item'>Services</li>
          <li className='menu-item chat' onClick={letChat}>let's chat</li>
        </ul>
      </nav>
    </header>
  )
}


export default Banner;
