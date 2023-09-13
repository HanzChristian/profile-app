import React, { useState, useEffect } from 'react';
import "./HeroImgStyles.css";
import TemplateImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-bg" src="https://images.unsplash.com/photo-1613690399151-65ea69478674?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" alt="introBg" />
      </div>

      <div className={`content ${fadeIn ? 'fade-in' : ''}`}>
        <h1>Welcome to PT. Kreasi Emas Gemilang!</h1>
        <p className="content-text">PT Kreasi Emas Gemilang is a national company with 15 years of experience in Gum products, including Gum Damar, Gum Copal, Gum Rosin, Damar Batu (Rock Damar), Turpentine Oil, and Tropica Flour (Cassava Flour). Our company has been exporting these products to several countries including China, Australia, Singapore, other Asia Pacific countries, and European countries.</p>
        <div className="button-container">
          <Link to="/product" className="btn">To Product</Link>
          <Link to="/market" className="btn">To Market</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
