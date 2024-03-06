import React from 'react';
import '../../App.css';
import './SignUp.css';
import CardItem from '../CardItem';


function SignUp() {
  return(
    <div className='images'>
      <h1 className='back-head'> CAT PICTURES</h1>
      <video src='/videos/video-4.mp4' autoPlay loop muted />  
      <ul className='first-sec'>
        <CardItem
        src = 'images/p1.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p2.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p3.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p4.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p5.jpg'>
        </CardItem>
      </ul>
      <ul className='second-sec'>
        <CardItem
        src = 'images/p6.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p7.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p8.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p9.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p10.jpg'>
        </CardItem>
      </ul>
      <ul className='third-sec'>
        <CardItem
        src = 'images/p11.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p12.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p13.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p14.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p15.jpg'>
        </CardItem>
      </ul>
      <ul className='fourth-sec'>
        <CardItem
        src = 'images/p16.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p17.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p18.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p19.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p20.jpg'>
        </CardItem>
      </ul>
      <ul className='fifth-sec'>
        <CardItem
        src = 'images/p21.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p22.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p23.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p24.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p25.jpg'>
        </CardItem>
      </ul>
      <ul className='sixth-sec'>
        <CardItem
        src = 'images/p26.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p27.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p28.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p29.jpg'>
        </CardItem>
        <CardItem
        src = 'images/p30.jpg'>
        </CardItem>
      </ul>
    </div>
  );
}

export default SignUp;