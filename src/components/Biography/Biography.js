import React from 'react';
import classnames from 'classnames';
import AboutMe from '../Biography/AboutMe';
import Chat from './LetChat';
import Services from '../Biography/Services';
import Education from '../Biography/Education';
import '../../styles/biography/biography.scss';

const sectionStepMap = {
  "about-me": 0,
  "education": 1,
  "services": 2,
  "let-chat": 3
}

const Biography = () => {
  const [step, setStep] = React.useState(0)

  const toggleSection = (event) => {
    setStep(sectionStepMap[event.target.name])
  }

  return (
    <section className="biography">
      <div class="action-items">
        <button name="about-me" className={classnames("action-item", {active: step === sectionStepMap["about-me"]})} onClick={toggleSection}>About Me</button>
        <button name="education" className={classnames("action-item", {active: step === sectionStepMap["education"]})} onClick={toggleSection}>Education</button>
        <button name="services" className={classnames("action-item", {active: step === sectionStepMap["services"]})} onClick={toggleSection}>Services</button>
        <button name="let-chat" className={classnames("action-item", {active: step === sectionStepMap["let-chat"]})} onClick={toggleSection}>Let's Chat</button>
      </div>
      <div className="content">
        {step === sectionStepMap["about-me"] && <AboutMe />}
        {step === sectionStepMap["education"] && <Education />}
        {step === sectionStepMap["services"] && <Services />}
        {step === sectionStepMap["let-chat"] && <Chat />}
      </div>
    </section>
  )
}

export default Biography;
