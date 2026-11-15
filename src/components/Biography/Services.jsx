import React from 'react';
import ServiceImage from '../../images/service.png';

const Services = () => (
  <div className="bio-wrapper" id="about-container">
    <img src={ServiceImage} alt="edu" />
    <div className="bio">
      <h5>Services</h5>
      <h1>What I can provide</h1>
      I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases.
      My current toolset includes Ruby and Ruby on Rails, ReactJS, Redux, AWS and all the other various frameworks, libraries and technologies related to them.
      I can help you with:
      <ul>
        <li>Leading and co-developing backend and frontend applications</li>
        <li>Mentoring a development team</li>
        <li>Defining the scope and estimation of tasks</li>
      </ul>
    </div>
  </div>
)

export default Services;
