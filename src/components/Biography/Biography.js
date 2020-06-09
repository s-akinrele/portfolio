import React from 'react';
import classnames from 'classnames';
import AboutMe from '../Biography/AboutMe';
import Services from '../Biography/Services';
import Education from '../Biography/Education';
import '../../styles/biography/biography.scss';

const sectionStepMap = {
  "about-me": 0,
  "education": 1,
  "services": 2
}

const Biography = () => {
  const [step, setStep] = React.useState(0)

  const toggleSection = (event) => {
    setStep(sectionStepMap[event.target.name])
  }

  return (
    <section className="biography">
      <div className="action-items">
        <button name="about-me" className={classnames("action-item", {active: step === sectionStepMap["about-me"]})} onClick={toggleSection}>About Me</button>
        <button name="education" className={classnames("action-item", {active: step === sectionStepMap["education"]})} onClick={toggleSection}>Education</button>
        <button name="services" className={classnames("action-item", {active: step === sectionStepMap["services"]})} onClick={toggleSection}>Services</button>
      </div>
      <div className="content">
        {step === sectionStepMap["about-me"] && <AboutMe />}
        {step === sectionStepMap["education"] && <Education />}
        {step === sectionStepMap["services"] && <Services />}
      </div>
    </section>
  )
}

export default Biography;
