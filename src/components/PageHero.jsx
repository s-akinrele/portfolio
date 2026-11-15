import React from 'react';
import '../styles/pageHero.scss';
import Idea from '../images/idea.png';

const PageHero = () => (
  <section className="page-hero">
    <div className="basic-info">
      <h1>Hi, I’m Simi 👋🏽</h1>
      <p className="role">Staff Software Engineer | Backend & Distributed Systems</p>
      <p className="summary">Building scalable systems, solving complex engineering challenges, and exploring the future of AI-powered software development.</p>
    </div>
    <div className="idea">
      <img src={Idea} alt="idea" />
    </div>
  </section>
)

export default PageHero;
