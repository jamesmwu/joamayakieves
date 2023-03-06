import React from 'react';
import "../styles/Bubbles.css"

function BubbleItem({title, about}) {
  return (
    <>
    <div class="bubble">
      <div class="title">
        <p>{title}</p>
      </div>
      <div class="about">
        <p>{about}</p>
      </div>
    </div>
    </>
  )
}

export default BubbleItem;
