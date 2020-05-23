import React from 'react';
import ServiceImage from '../../images/service.png';

const Services = () => (
  <div className="bio-wrapper">
    <img src={ServiceImage} alt="edu" />
    <p className="bio">
      <h5>Services</h5>
      <h1>What I can provide</h1>
      I’m a Software Engineer based in Toronto, Canada. 
      I enjoy solving complex problems, while I’m a proficient full-stack engineer, my expertise is in building scale backend applications using Ruby on Rails.
    </p>
  </div>
)

export default Services;
