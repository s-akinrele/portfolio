import React from 'react'
import Banner from './Banner'
import PageHero from './PageHero'
import Biography from './Biography/Biography'
import Socials from './Socials'

import '../styles/homePage.scss'

const HomePage = () => (
  <div className="home-page">
    <Banner />
    <main className="page">
      <PageHero />
      <Biography />
      <Socials />
    </main>
  </div>
)

export default HomePage
