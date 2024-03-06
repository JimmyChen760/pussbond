import React from "react";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    padding: '20px',
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
  };

  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
  };
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  };

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1444791252404-500e5b11f71b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: "Pussbond's story"
    },
    {
      url: 'https://images.unsplash.com/photo-1551376347-075b0121a65b?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Pussbond is from...'
    },
    {
      url: 'https://images.unsplash.com/photo-1629194893765-3a904e9080dd?q=80&w=3838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Slide 3'
    },
  ];
  
  export const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide duration={1000000} transitionDuration={300} {...properties}>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }