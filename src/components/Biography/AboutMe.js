import React from 'react';
import Relaxed from '../../images/relaxed.png';

const AboutMe = () => (
  <div className="bio-wrapper" id="about-container">
    <img src={Relaxed} alt="relaxed" />
    <div className="bio">
      <h5>About Me</h5>
      <h1>Brief info about me</h1>
      I'm a Software Engineer based in Toronto, Canada.
      I enjoy solving complex problems, while I’m a proficient full-stack engineer, my expertise is building scalable backend applications using Ruby on Rails.
    </div>
  </div>
)

export default AboutMe;
