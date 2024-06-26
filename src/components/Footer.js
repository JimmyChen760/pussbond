import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for taking a look at Pussbond's website!
        </p>
        <p className='footer-subscription-text'>
          We hope she can find a home soon!
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <img src='https://media1.giphy.com/media/SP3eWzz1O8vkcbklVq/giphy.gif?cid=6c09b952vgsqi1yy5y6qtqjmbcvq90efbnj7h7ry1qfbnau8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' alt='cat' width='160' height='160' className='cat-gif'></img>
            <h2>Contact Humane Society</h2>
            <Link to='https://www.instagram.com/mississaugahumanesociety/'>Instagram</Link>
            <Link to='https://www.facebook.com/mississaugahumane/'>Facebook</Link>
            <p className='p1'>Phone Number: 1-905-271-0883</p>
            <p className='p2'>Email: info@mississaugahumanesociety.com</p>
            
          </div>
        </div>
        
          </div>
        </div>
      
  );
}

export default Footer;