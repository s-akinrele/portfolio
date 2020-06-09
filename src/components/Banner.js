import React, { useState } from 'react';
import classnames from 'classnames';
import '../styles/banner.scss';

const Banner = () => {
  const [activeElement, setActiveElement] = useState({home: true});
  const [display, setDisplay] = useState(false);

  const letChat = () => {
    window.open('mailto:akinrelesimi@gmail.com', '_blank');
  }

  const customScroll = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  const onNavigationClick = (event) => {
    let name = event.target.getAttribute('name');
    switch(name) {
      case 'about':
        customScroll("about-container")
        setActiveElement({[name]: true})
        break;
      case 'social':
        customScroll("social-container")
        setActiveElement({[name]: true})
        break;
      default:
        setActiveElement({[name]: true})
        break
    }
  }

  return (
    <header className="banner">
      <div className="nav-desktop">
        <div className="title">Simi</div>
        <nav>
          <ul>
            <li name="home" className={classnames('menu-item', {active: activeElement.home})} onClick={onNavigationClick}>Home</li>
            <li name="about" className={classnames('menu-item', {active: activeElement.about})} onClick={onNavigationClick}>About</li>
            <li name="social" className={classnames('menu-item', {active: activeElement.social})} onClick={onNavigationClick}>Socials</li>
            <li name="chat" className='menu-item chat' onClick={letChat}>let's chat</li>
          </ul>

          <a onClick={() => setDisplay(!display)} className="icon">
            <i className="fa fa-bars"></i>
          </a>
        </nav>
      </div>

        <div className={classnames('nav-mobile', {active: display})}>
          <ul>
            <li name="about" className={classnames('menu-item', {active: activeElement.about})} onClick={onNavigationClick}>About</li>
            <li name="social" className={classnames('menu-item', {active: activeElement.social})} onClick={onNavigationClick}>Socials</li>
            <li name="chat" className='menu-item' onClick={letChat}>let's chat</li>
          </ul>
        </div>
    </header>
  )
}


export default Banner;
