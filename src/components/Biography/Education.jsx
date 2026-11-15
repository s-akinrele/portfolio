import React from 'react';
import EducationImage from '../../images/education.png';

const Education = () => (
  <div className="bio-wrapper" id="about-container">
    <img src={EducationImage} alt="edu" />
    <div className="bio">
      <h5>Education</h5>
      <h1>Bsc Computer Science (Information System)</h1>
      I obtained my Bachelor's degree in Computer Science from Babcock University Nigeria in 2015.
    </div>
  </div>
)

export default Education;
