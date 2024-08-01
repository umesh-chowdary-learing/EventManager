// // CountdownTimer.js
// import React, { useState, useEffect } from 'react';
// import './CountdownTimer.css';

// const CountdownTimer = () => {
//   const calculateTimeLeft = () => {
//     const targetDate = new Date('2024-06-11T18:59:59').getTime();
//     const now = new Date().getTime();
//     const difference = targetDate - now;

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     return { days, hours, minutes, seconds };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//   const [flip, setFlip] = useState({ days: false, hours: false, minutes: false, seconds: false });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const newTimeLeft = calculateTimeLeft();
      
//       setFlip({
//         days: newTimeLeft.days !== timeLeft.days,
//         hours: newTimeLeft.hours !== timeLeft.hours,
//         minutes: newTimeLeft.minutes !== timeLeft.minutes,
//         seconds: newTimeLeft.seconds !== timeLeft.seconds,
//       });

//       setTimeLeft(newTimeLeft);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const renderFlipCard = (value, unit) => (
//     <div className={`flip-card ${flip[unit] ? 'flip' : ''}`}>
//       <div className="flip-card-inner">
//         <div className="flip-card-front">
//           {value}
//         </div>
//         <div className="flip-card-back">
//           {value}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
    
//     {/* <div className='py-48 px-64 max-w-llg mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-4'>
//       <div className='flex  space-x-4 items-center'>
//         <div className='p-16 max-v-sm mx-auto bg-green rounded-lg shadow-lg   '>
//             {timeLeft.days}

//             <span> Days</span>
//         </div>
//         <div className='p-16 max-v-sm mx-auto bg-green rounded-lg shadow-lg   '>
//     {timeLeft.hours}
//     <span > Hours</span>
//         </div>
//         <div className='p-16 max-v-sm mx-auto bg-green rounded-lg shadow-lg   '>
//     {timeLeft.minutes}
//     <span> Minutes</span>
//         </div>
//         <div className='p-16 max-v-sm mx-auto bg-green rounded-lg shadow-lg flex  '>
//     {timeLeft.seconds}
//     <span> Seconds</span>
//         </div>
//         </div>
//     </div> */}
//     <span v-show="show" class="flip-clock__piece">
//     <span class="flip-clock__card flip-card">
//       <b class="flip-card__top">{{current | zerofill}}</b>
//       <b class="flip-card__bottom" data-value="{{current | zerofill}}"></b>
//       <b class="flip-card__back" data-value="{{previous | zerofill}}"></b>
//       <b class="flip-card__back-bottom" data-value="{{previous | zerofill}}"></b>
//     </span>
//     <span class="flip-clock__slot">{{property}}</span>
//   </span>
  
//     </>
//   );
// };

// export default CountdownTimer;

// src/components/CountdownTimer.jsx
import React, { useState, useEffect } from 'react';
import FlipCard from './FlipCard';
import './FlipCard.css';
import FlipCard1 from './FlipCard1';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [previousTime, setPreviousTime] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPreviousTime(timeLeft);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="flip-clock">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flip-clock__piece">
          
          {/* <FlipCard current={value} previous={previousTime[unit]} />
          <span className="flip-clock__slot">{unit}</span> */}
          <FlipCard1 current={value} previous={previousTime[unit]} />
          <span className="flip-clock__slot">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;