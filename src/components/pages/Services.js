import React from 'react';
import '../../App.css';
import './Services.css';
import { Slideshow } from './Slideshow';


function Services() {
  return(
    <div className='backstory-pg'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <Slideshow className='slideshow'></Slideshow>
    </div>
  );
}

export default Services;