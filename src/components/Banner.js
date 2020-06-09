import React, { useState } from 'react';
import classnames from 'classnames';
import '../styles/banner.scss';

const Banner = () => {
  const [activeElement, setActiveElement] = useState({home: true});

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
      <div className="title">Simi</div>
      <nav>
        <ul>
          <li name="home" className={classnames('menu-item', {active: activeElement.home})} onClick={onNavigationClick}>Home</li>
          <li name="about" className={classnames('menu-item', {active: activeElement.about})} onClick={onNavigationClick}>About</li>
          <li name="social" className={classnames('menu-item', {active: activeElement.social})} onClick={onNavigationClick}>Socials</li>
          <li name="chat" className='menu-item chat' onClick={letChat}>let's chat</li>
        </ul>
      </nav>

      <div className="nav-mobile">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Socials</li>
          <li>let's chat</li>
        </ul>
        <a href="javascript:void(0);" className="icon" >
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </header>
  )
}


export default Banner;
