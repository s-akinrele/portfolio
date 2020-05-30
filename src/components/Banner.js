import React from 'react';
import '../styles/banner.scss';

const Banner = () => {
  const letChat = () => {
    window.open('mailto:akinrelesimi@gmail.com', '_blank');
  }

  const customScroll = (elementId) => {
    const element = document.querySelector(elementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  return (
    <header className="banner">
      <div className="title">Simi</div>
      <nav>
        <ul>
          <li className='menu-item active'>Home</li>
          <li className='menu-item' onClick={() => customScroll("#about-container")}>About</li>
          <li className='menu-item' onClick={() => customScroll("#social-container")}>Socials</li>
          <li className='menu-item chat' onClick={letChat}>let's chat</li>
        </ul>
      </nav>
    </header>
  )
}


export default Banner;
