import './Zodiac.css';
import React from 'react';
import { zodiac } from '../../data';

export default function Zodiac(props) {
  return (
    <>
      <div className='zodiac'>
        <span>{props.name}</span>
        <span>{props.dates}</span>
        <span>{props.symbol}</span>
        <img alt={props.symbol} src={`${process.env.PUBLIC_URL}/public/${zodiac.symbol}.jpeg` }/>
      </div>
    </>
  );
}