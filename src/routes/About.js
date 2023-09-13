import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';

import "./AboutStyles.css";

const About = () => {
  const imageUrl = "https://images.unsplash.com/photo-1527314392553-2c7bded21b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  return (
    <div className="about-container">
      <Navbar />
      <HeroImg2 heading="About Us" imageUrl={imageUrl} />

     <div className='intro'>
        <div className='intro-content'>
          <h2 className='intro-header'>Company Intro</h2>
          <p className="larger-text">PT Kreasi Emas Gemilang is a national company with 15 years of experience in Gum products, including Gum Damar, Gum Copal, Gum Rosin, Damar Batu (Rock Damar), Turpentine Oil, and Tropica Flour (Cassava Flour). Our company has been exporting these products to several countries including China, Australia, Singapore, other Asia Pacific countries, and European countries.</p>
        </div>
        <div className='intro-image'>
          <img src="company.jpg" alt="Intro" />
        </div>
      </div>

      <div className='vision-mission'>
        <div className='vision-mission-image'>
          <img src="about-us-person.png" alt="Intro"/>
        </div>
        <div className='vision-mission-content vision-mission-box'>
          <div className='vision-content'>
            <h1 className='vision-header'>Vision</h1>
            <p className='vision-text'>Our company is fully committed to providing a satisfied product and services to all our customers.</p>
          </div>
          <div className='mission-content'>
            <h1 className='mission-header'>Mission</h1>
            <p className='mission-text'>Bring the widest range of Gum Damar products that company can offer and collaborate with other parties in obtaining mutual benefit to achieve go green program to lessen environmental impacts.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
