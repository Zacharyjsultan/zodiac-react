import './Zodiac.css';
import React from 'react';

export default function Zodiac(props) {
  return (
    <>
      <div className='zodiac'>
        <img alt={props.symbol} src={`${process.env.PUBLIC_URL}/images/${props.symbol}.png`}/>
        <span>{props.name}</span>
        <span>{props.dates}</span>
        <span>{props.symbol}</span>
      </div>
    </>
  );
}