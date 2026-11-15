import React from 'react';
import ServiceImage from '../../images/service.png';

const Services = () => (
  <div className="bio-wrapper" id="about-container">
    <img src={ServiceImage} alt="edu" />
    <div className="bio">
      <h5>Services</h5>
      <h1>What I Can Provide</h1>
      <p>As a Staff Software Engineer with over 10 years of experience, I specialize in designing, building, and scaling reliable software systems. I’ve led complex engineering initiatives, developed applications from the ground up, and improved the performance, scalability, and maintainability of existing platforms.</p>
      <p>My expertise spans backend engineering, distributed systems, system architecture, and technical leadership, with a strong foundation in Ruby on Rails and experience across modern cloud infrastructure and frontend technologies.</p>
      <p>My current technology stack includes Ruby, Ruby on Rails, JavaScript, TypeScript, React, Vue.js, MySQL, Redis, AWS, Kubernetes, and various tools supporting modern software development.</p>
      <p>I can help with:</p>
      <ul>
        <li><strong>Software Architecture & System Design:</strong> Designing scalable, maintainable, and resilient applications.</li>
        <li><strong>Backend & Full-Stack Development:</strong> Building and evolving applications, APIs, and integrations.</li>
        <li><strong>Performance & Reliability:</strong> Optimizing application performance, improving system reliability, and resolving complex technical challenges.</li>
        <li><strong>Technical Leadership & Mentorship:</strong> Leading engineering initiatives, mentoring developers, and promoting engineering best practices.</li>
        <li><strong>Engineering Strategy & Delivery:</strong> Translating business requirements into technical solutions, defining project scope, and guiding implementation.</li>
        <li><strong>AI & Developer Productivity:</strong> Exploring AI-assisted development, evaluating AI-generated solutions, and improving engineering workflows.</li>
      </ul>
    </div>
  </div>
)

export default Services;
