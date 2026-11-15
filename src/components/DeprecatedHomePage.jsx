import React from 'react';
import Banner from './Banner';

import '../styles/homePage.scss'

const HomePage = () => (
  <div className='home-page fixed-top'>
    <div className='bg-overlay'/>
    <Banner />
  </div>
)

export default HomePage;
