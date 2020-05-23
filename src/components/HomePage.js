import React from 'react'
import Banner from './Banner'
import PageHero from './PageHero'
import Biography from './Biography/Biography'
import Socials from './Socials'

import '../styles/homePage.scss'

const HomePage = () => (
  <div className='home-page'>
    <Banner/>
    <PageHero />
    <Biography />
    <Socials />
  </div>
)

export default HomePage
