import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import FooterNew from '../components/Footer-new';
import "./ContactStyles.css";
import { Map } from '@googlemaps/react-wrapper'


const Contact = () => {
  const imageUrl = "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1521&q=80";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form here

  };

  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact" imageUrl={imageUrl} />
      <div className='container-contact'>
        <div className='content-contact'>
          <div className='details'>
            <h1 className='title-contact'>Details Contact</h1>
            <div className='details-contact'>
              <p className='company-name'>PT Kreasi Emas Gemilang</p>
              <p className='street-name'>Jl. Daan Mogot Baru Blok LB 3 No. 17-18, Kalideres, Jakarta, Indonesia, 11840</p>
              <div className='phone-fax-email-name'>
                <p>Phone : +62-21 543 73 132</p>
                <p>Mobile : +62-811 873 382</p>
                <p>Fax : +62-21 543 66 488</p>
                <p>kreasiemas1@yahoo.com</p>
              </div>
            </div>
          </div>
          <div className='getintouch'>
            <h1 className='title-contact'>Email Contact</h1>
            <div className='getintouch-contact'>
              <h1 className='title-getintouch'>Get in touch with us!</h1>
              <form className='contact-form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Your Name' required />
                <input type='email' placeholder='Your Email' required />
                <textarea placeholder='Your Message' required></textarea>
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterNew/>
    </div>
  )
}

export default Contact;