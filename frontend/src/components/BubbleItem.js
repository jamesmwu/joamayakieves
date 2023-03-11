import React, { useState } from 'react';
import "../styles/Bubbles.css";
import LikedHeart from "../icons/liked-heart.jsx";
import UnlikedHeart from "../icons/unliked-heart.jsx";
// import User from "../icons/user.jsx"
// import Arrow from "../icons/arrow-up-right.jsx"

function BubbleItem({ title, author, about, link }) {
  const [isUnlikedHeart, setUnlikedHeart] = useState(true);

  function handleHeartClick() {
    setUnlikedHeart(!isUnlikedHeart);
  }

  return (
    <>
      <div className="bubble">
        <div className="text">
          <div className="title">{title}</div>
          <div className="author">{author}</div>
          <div className="about">{about}</div>
        </div>
        <div className="heart" onClick={handleHeartClick}>
          {isUnlikedHeart ? (
            <UnlikedHeart />
          ) : (
            <LikedHeart />
          )}
        </div>
      </div>

      {link ?
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button>{link}</button>
          </a>
        </div> : null}
    </>
  );
}

export default BubbleItem;
