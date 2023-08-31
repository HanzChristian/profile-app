import React from 'react';
import Navbar from '../components/Navbar';
import { Element } from 'react-scroll';
import HeroImg from '../components/HeroImg';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Element name="heroImg">
        <HeroImg />
      </Element>
      <ImageCarousel />
      <Footer />
    </div>
  );
};

export default Home;
