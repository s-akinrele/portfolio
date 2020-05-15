import React from 'react';
import AboutMe from '../Biography/AboutMe';
import '../../styles/biography/biography.scss';

const Biography = () => {
  return (
    <section className="biography">
      <div class="action-items">
        <button name="about-me" className="action-item active">About Me</button>
        <button name="education" className="action-item">Education</button>
        <button name="services" className="action-item">Services</button>
        <button name="let-chat" className="action-item">Let's Chat</button>
      </div>
      <div className="content">
        <AboutMe />
      </div>
    </section>
  )
}

export default Biography;
