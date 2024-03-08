import React from "react";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import "./Slideshow.css"

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
      caption: "Pussbond is a wonderful kitty that will make the perfect new addition to your family! After weathering the elements as a young mother, she is more than ready to live a life of domesticity with loving humans and a cat friend. Found wandering in someone’s backyard, Pussbond was a brave stray who tried her best to survive. When she was rescued, Pussbond had 4 kittens and took on her role as a mother with dedication and strength. She propelled her kittens to grow into curious, loving cats as they all found their forever families. Now, it's her turn."
    
    },
    {
      url: 'https://images.unsplash.com/photo-1629194893765-3a904e9080dd?q=80&w=3838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: "Her foster family and cat friends all helped Pussbond come out of her shell and become curious, gentle, and playful. During the day, she can be found napping in her favorite spot, following her foster brother around, or bird-watching with her foster sister. Although she is a little unsure of human interaction, she is now comfortable with gentle pets and licking treats off of your hand. Pussbond will do well in a quiet home with another cat(s), where she can enjoy their company while she gets used to humans. With time, patience, and love, Pussbond will become an affectionate cat who enjoys human interaction! Adopt Pussbond today!"
    },
  ];
  
  export const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide duration={1000000} transitionDuration={300} {...properties}>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  <p className="slide-cap">{slideImage.caption}</p>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }