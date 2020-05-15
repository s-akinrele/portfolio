import React from 'react';
import Relaxed from '../../images/relaxed.png';
import '../../styles/biography/aboutMe.scss';

const AboutMe = () => (
  <div className="about-me">
    <img src={Relaxed} alt="relaxed" />
    <p className="bio">
      <h5>About Me</h5>
      <h1>Brief info about me</h1>
      I’m a Software Engineer based in Toronto, Canada. 
      I enjoy solving complex problems, while I’m a proficient full-stack engineer, my expertise is in building scale backend applications using Ruby on Rails.
    </p>
  </div>
)

export default AboutMe;
