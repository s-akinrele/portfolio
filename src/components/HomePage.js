import React from 'react'
import Banner from './Banner'
import PageHero from './PageHero'
import Biography from './Biography/Biography'
import Socials from './Socials'
import Footer from './Footer'

import '../styles/homePage.scss'

const HomePage = () => (
  <div className='home-page'>
    <Banner/>
    <PageHero />
    <Biography />
    <Socials />
    <Footer />
  </div>
)

export default HomePage
