import React from "react";
import '../styles/socials.scss';
import LinkedinImg from '../images/linkedin.png';
import MediumImg from '../images/medium.png';
import TwitterImg from '../images/twitter.png';
import MailImg from '../images/mail.png';


const Socials = () =>  (
  <section className="socials">
    <h6>Social Media</h6>
    <h3>Let's Be Friends</h3>
    <div className="connect">
      <div className="action-item">
        <p>Linkedin<br/>
          <span>Professional social profile</span>
        </p>
        <img src={LinkedinImg} alt="linkedin" />
      </div>
      <div className="action-item">
        <p>Twitter<br/>
          <span>Random thoughts</span>
        </p>
        <img src={TwitterImg} alt="twitter" />
        </div>
      <div className="action-item">
        <p>Email<br/>
          <span>akinrelesimi@gmail.com</span>
        </p>
        <img src={MailImg} alt="mail" />
      </div>
      <div className="action-item">
        <p>Medium<br/>
          <span>Work case study</span>
        </p>
        <img src={MediumImg} alt="medium" />
      </div>
    </div>
  </section>
)

export default Socials;
