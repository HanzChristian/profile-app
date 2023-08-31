import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FooterNew from '../components/Footer-new';
import HeroImg2 from '../components/HeroImg2';
import './MarketStyles.css';

const Market = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1532079563951-0c8a7dacddb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set the fadeIn state to true after a short delay (you can adjust the delay)
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Market" imageUrl={imageUrl} />
      <div className={`container-market`}>
        <div className={`content-market ${fadeIn ? 'fade-in' : ''}`}>
          <h1 className="heading-market">Market Scope</h1> 
            <p className="text-market">
              As dammar have many industrial uses, the majority of our market coverage is in the paint and ink industry. Since we entered the Asia-Pacific market, our company has been trying to expand its market reach to the wider region of America and Europe.
            </p>
        </div>
      </div>
      <FooterNew />
    </div>
  );
};

export default Market;
