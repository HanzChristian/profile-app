import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';

import ImageSlider from "./ImageSlider";
import TemplateImg from "../assets/template-background.jpg";
import "./ImageCarouselStyles.css";

const ImageCarousel = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const imageCarouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = imageCarouselRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        setFadeIn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slides = [
    { url: 'http://localhost:3000/displayed-1.jpeg', title: 'ceramic-1' ,width:'200px',height:'550px'},
    { url: 'http://localhost:3000/displayed-2.jpeg', title: 'ceramic-2',width:'200px',height:'550px' },
    { url: 'http://localhost:3000/displayed-3.jpeg', title: 'ceramic-3',width:'200px',height:'550px' }
  ];

  const containerStyles = {
    width: "200px",
    height: "550px",
    margin: "0 auto",
  };

  return (
    <Element name="imageCarousel">
      <div
        className={`hero2 ${fadeIn ? 'fade-in' : ''}`}
        ref={imageCarouselRef}
      >
        <div className="mask2">
          <img className="intro-bg2" src={TemplateImg} alt="introBg" />
        </div>

        <div className="content2">
          <div className="images-carousel" style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
          <div className="carousel-info">
            <h1 className='title-carousel'>Product's Variants</h1>
            <p className="carousel-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a purus facilisis,
              condimentum nunc ac, sagittis nisl. Nulla ac dui et orci sodales finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a purus facilisis,
              condimentum nunc ac, sagittis nisl. Nulla ac dui et orci sodales finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a purus facilisis,
              condimentum nunc ac, sagittis nisl. Nulla ac dui et orci sodales finibus.
            </p>
            <Link to= "/product" className="btn">To Product</Link>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ImageCarousel;
