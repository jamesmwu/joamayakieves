import React from 'react';
import "../styles/Bubbles.css"
import LikedHeart from "../icons/liked-heart.jsx"
import UnlikedHeart from "../icons/unliked-heart.jsx"
import User from "../icons/user.jsx"
import Arrow from "../icons/arrow-up-right.jsx"

function BubbleItem({title, author, about}) {
  return (
    <>
    <div className="bubble">
      <div className="text">
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="about">{about}</div>
        <div className="heart">
          <LikedHeart />
          <UnlikedHeart />
          <User />
          <Arrow />
        </div>
      </div>
    </div>
    </>
  )
}

export default BubbleItem;
