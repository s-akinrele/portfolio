import React from 'react';
import '../styles/pageHero.scss';
import Idea from '../images/idea.png';

const PageHero = () => (
  <section className='page-hero'>
    <div className='basic-info'>
      <span className='greeting'>Hello I'm</span>
      <h1>Oluwasinmisola<br/>Akinrele</h1>
      <span className='title'>Software Engineer</span>
    </div>
    <div className='idea'>
      <img src={Idea} alt='idea' />
    </div>
  </section>
)

export default PageHero;
