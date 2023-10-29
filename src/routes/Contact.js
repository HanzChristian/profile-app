import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import FooterNew from '../components/Footer-new';
import './ContactStyles.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1521&q=80';
  const form = useRef();
  const [emailSentSuccess, setEmailSentSuccess] = useState(false); // State for success message
  const [emailSentError, setEmailSentError] = useState(false); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm('service_j02qf19', 'template_pcm1x1u', e.target, 'uQ8ZsoAfr58H3Mtmd');
      e.target.reset();
      setEmailSentSuccess(true); // Set success message to true when email is sent successfully
    } catch (error) {
      console.error(error);
      setEmailSentError(true); // Set error message to true when there's an error sending email
    }
  };

  const closeSuccessPopup = () => {
    setEmailSentSuccess(false); // Close the success popup
  };

  const closeErrorPopup = () => {
    setEmailSentError(false); // Close the error popup
  };

  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact" imageUrl={imageUrl} />
      <div className='container-contact'>
        <div className='content-contact'>
          <div className='details'>
            <h1 className='title-contact'>Details Contact</h1>
            <div className='details-contact'>
              <p className='company-name'>PT Kreasi Emas Gemilang</p>
              <p className='street-name'>
                Ruko Daan Mogot Baru Blok LB 3 No. 17-18, Kalideres, Jakarta, Indonesia, 11840
              </p>
              <div className='phone-fax-email-name'>
                <p>Phone : +62-21 543 73 132</p>
                <p>Mobile : +62-811 873 382</p>
                <p>Fax : +62-21 543 66 488</p>
                <p>sales@kreasiemasgemilang.com</p>
              </div>
            </div>
          </div>
          <div className='getintouch'>
            <h1 className='title-contact'>Email Contact</h1>
            <div className='getintouch-contact'>
              <h1 className='title-getintouch'>Get in touch with us!</h1>
              <form className='contact-form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Your Name' name='name' required />
                <input type='email' placeholder='Your Email' name='email' required />
                <textarea placeholder='Your Message' name='message' required></textarea>
                <button type='submit'>Submit</button>
              </form>
              {emailSentSuccess && (
                <div className='popup success'>
                  <div className='popup-content'>
                    <span className='close close-grey' onClick={closeSuccessPopup}>
                      &times;
                    </span>
                    <p className='success-message'>Email sent successfully!</p>
                  </div>
                </div>
              )}
              {emailSentError && (
                <div className='popup error'>
                  <div className='popup-content'>
                    <span className='close close-grey' onClick={closeErrorPopup}>
                      &times;
                    </span>
                    <p className='error-message'>Error sending email. Please try again later.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterNew />
    </div>
  );
};

export default Contact;
