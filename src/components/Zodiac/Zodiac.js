import './Zodiac.css';
import React from 'react';


export default function Zodiac(props) {
  return (
    <>
      <div className='zodiac'>
        <span>{props.name}</span>
        <span>{props.dates}</span>
        <span>{props.symbol}</span>
        <img alt={props.name} src={`${process.env.PUBLIC_URL}/signs/${props.name}.jpeg` }/>
      </div>
    </>
  );
}