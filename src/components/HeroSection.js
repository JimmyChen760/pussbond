import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1 className='hero-header'>PUSSBOND IS WAITING</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            hypLink={"https://www.mississaugahumanesociety.ca/ouranimals"}
          >
            ADOPT
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            hypLink={'/backstory-pg'}
          >
            BACKSTORY
          </Button>
      </div>
    </div>
  );
}

export default HeroSection;
