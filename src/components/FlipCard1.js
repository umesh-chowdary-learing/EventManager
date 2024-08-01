import React,{useEffect,useRef} from 'react';

const FlipCard1=({current,previous})=>{

    return(
        <div class="container">
  <div class="balloon white">
    <div class="star-red"></div>
  <div class="face">
    <div class="eye"></div>
    <div class="mouth happy"></div>
  </div>
  <div class="triangle"></div>
  <div class="string"></div>
</div>

<div class="balloon red">
  <div class="star"></div>
  <div class="face">
    <div class="eye"></div>
    <div class="mouth happy"></div>
  </div>
  <div class="triangle"></div>
  <div class="string"></div>
</div>

<div class="balloon blue">
  <div class="star"></div>
  <div class="face">
    <div class="eye"></div>
    <div class="mouth happy"></div>
  </div>
  <div class="triangle"></div>
  <div class="string"></div>
</div>
  <div id="timer"></div>
  
</div>
    );
}


export default FlipCard1;