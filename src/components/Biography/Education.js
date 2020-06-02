import React from 'react';
import EducationImage from '../../images/education.png';

const Education = () => (
  <div className="bio-wrapper">
    <img src={EducationImage} alt="edu" />
    <div className="bio">
      <h5>Education</h5>
      <h1>What I can provide</h1>
      I’m a Software Engineer based in Toronto, Canada. 
      I enjoy solving complex problems, while I’m a proficient full-stack engineer, my expertise is in building scale backend applications using Ruby on Rails.
    </div>
  </div>
)

export default Education;
