import React from 'react';
import EducationImage from '../../images/education.png';

const Education = () => (
  <div className="bio-wrapper" id="about-container">
    <img src={EducationImage} alt="edu" />
    <div className="bio">
      <h5>Education</h5>
      <h1>Bachelor of Science (B.Sc.) in Computer Science</h1>
      <p className="focus">Specialization in Information Systems</p>
      <p className="place">Babcock University, Nigeria | 2015</p>
      <p>I earned my Bachelor’s degree in Computer Science, specializing in Information Systems, from Babcock University in 2015. My education provided a strong foundation in software development, computer systems, and problem-solving, laying the groundwork for my career in software engineering.</p>
    </div>
  </div>
)

export default Education;
