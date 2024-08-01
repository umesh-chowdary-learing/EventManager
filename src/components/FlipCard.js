// src/components/FlipCard.jsx
import React, { useEffect, useRef } from 'react';
import './FlipCard.css';

const zeroFill = (value) => {
  return (value < 10 && value > -1 ? '0' : '') + value;
};

const FlipCard = ({ current, previous }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (previous !== current) {
      cardRef.current.classList.remove('flip');
      void cardRef.current.offsetWidth;
      cardRef.current.classList.add('flip');
    }
  }, [current, previous]);

  return (
    <span className="flip-clock__piece" ref={cardRef}>
      <span className="flip-clock__card flip-card">
         <b className="flip-card__top" >{zeroFill(current)}</b>
         <b className="flip-card__bottom" data-value={zeroFill(current)}></b>
        {/* <b className="flip-card__back" >{zeroFill(previous)}</b> */}
        {/* <b className="flip-card__back-bottom" data-value={zeroFill(previous)}></b>  */}
      </span>
    </span>
  );
};

export default FlipCard;