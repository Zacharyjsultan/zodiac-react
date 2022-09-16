import React from 'react';
import './Main.css';
import background from '../../background.jpg';
import { zodiac } from '../../data';
import Zodiac from '../Zodiac/Zodiac';


export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}>
    {zodiac.map((sign) => (
      <Zodiac key={sign.name} name={sign.name} dates={sign.dates} symbol={sign.symbol}/>
    ))}
  </main>;
  
}