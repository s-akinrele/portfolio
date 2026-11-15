import React from 'react';
import Relaxed from '../../images/relaxed.png';

const AboutMe = () => (
  <div className="bio-wrapper" id="about-container">
    <img src={Relaxed} alt="relaxed" />
    <div className="bio">
      <h5>About Me</h5>
      <h1>Hi, I’m Simi! 👋🏽</h1>
      <p>I’m a Staff Software Engineer with 10+ years of experience designing, building, and scaling reliable software systems.</p>
      <p>I specialize in backend engineering, distributed systems, and system architecture, with deep expertise in Ruby on Rails, cloud technologies, and performance optimization.</p>
      <p>Throughout my career, I’ve worked on complex engineering challenges, led technical initiatives, mentored engineers, and helped teams deliver scalable, maintainable solutions.</p>
      <p>Beyond traditional software engineering, I’m passionate about AI, developer productivity, and emerging technologies, particularly exploring how AI can improve software development and engineering workflows.</p>
      <p>I enjoy solving challenging problems, learning new technologies, and building solutions that make a meaningful impact.</p>
    </div>
  </div>
)

export default AboutMe;
