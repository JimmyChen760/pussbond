import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cat_head'>🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pb-1.jpg'
              text='Pussbond with her beloved'
              label='1'
              path='/images'
            />
            <CardItem
              src='images/pb-2.jpg'
              text='Kitchen counter conniseur'
              label='2'
              path='/images'
            />
            <CardItem
              src='images/pb-3.jpg'
              text='Windowside wallows'
              label='3'
              path='/images'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pb-4.jpg'
              text='Floored'
              label='4'
              path='/images'
            />
            <CardItem
              src='images/pb-5.jpg'
              text='Couch Critique'
              label='5'
              path='/images'
            />
            <CardItem
              src='images/pb-6.jpg'
              text='Bed buddy'
              label='6'
              path='/images'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pb-7.jpg'
              text='Tile tryer'
              label='7'
              path='/images'
            />
            <CardItem
              src='images/pb-8.jpg'
              text='Peeking pussbond'
              label='8'
              path='/images'
            />
            <CardItem
              src='images/pb-9.jpg'
              text='Grouchy pussbond'
              label='9'
              path='/images'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;