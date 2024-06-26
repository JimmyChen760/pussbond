import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay={true} loop={true} controls={false} playsInline muted/>
      <h1 className='hero-header'>PUSSBOND IS WAITING</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            hypLink={"https://www.mississaugahumanesociety.ca/adopt"}
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
          <img src='/images/pb-ghilbi.png' alt='Pussbond' style={{paddingTop: '1rem', marginLeft: 'auto',marginRight:'auto', width: '200px', height: "275px", display: 'block'}}/>
      </div>
    </div>
  );
}

export default HeroSection;
