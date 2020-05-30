import React from "react";
import '../styles/socials.scss';
import LinkedinImg from '../images/linkedin.png';
import MediumImg from '../images/medium.png';
import TwitterImg from '../images/twitter.png';
import MailImg from '../images/mail.png';


const Socials = () =>  (
  <section className="socials" id="social-container">
    <h6>Social Media</h6>
    <h3>Let's Be Friends</h3>
    <div className="connect">
      <a className="action-item" target="_blank" href="https://www.linkedin.com/in/oluwasinmisola-akinrele" rel="noopener noreferrer">
        <p>Linkedin<br/>
          <span>Professional social profile</span>
        </p>
        <img src={LinkedinImg} alt="linkedin" />
      </a>
      <a className="action-item" target="_blank" href="https://twitter.com/simiakinrele" rel="noopener noreferrer">
        <p>Twitter<br/>
          <span>Random thoughts</span>
        </p>
        <img src={TwitterImg} alt="twitter" />
        </a>
      <a className="action-item" target="_blank" href="mailto:akinrelesimi@gmail.com"  rel="noopener noreferrer">
        <p>Email<br/>
          <span>Let's connect</span>
        </p>
        <img src={MailImg} alt="mail" />
      </a>
      <a className="action-item" target="_blank" href="https://medium.com/@akinrelesimi" rel="noopener noreferrer">
        <p>Medium<br/>
          <span>Work case study</span>
        </p>
        <img src={MediumImg} alt="medium" />
      </a>
    </div>
  </section>
)

export default Socials;
