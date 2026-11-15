import React from 'react';
import '../styles/banner.scss';

const Banner = () => {
  const letChat = () => {
    window.open('mailto:akinrelesimi@gmail.com', '_blank');
  }

  return (
    <header className="banner">
      <div className="bar">
        <div className="title">Simi</div>
        <button type="button" className="chat" onClick={letChat}>Let's chat</button>
      </div>
    </header>
  )
}

export default Banner;
