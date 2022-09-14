import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <>
      <div className='zodiac'>
        <span>{props.name}</span>
        <span>{props.dates}</span>
        <img src={`${process.env.PUBLIC_URL}/src/${props.name}.png`}/>
      </div>
    </>
  );
}