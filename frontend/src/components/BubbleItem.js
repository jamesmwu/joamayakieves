import React, { useState, useEffect} from 'react';
import "../styles/Bubbles.css";
import LikedHeart from "../icons/liked-heart.jsx";
import UnlikedHeart from "../icons/unliked-heart.jsx";
import axios from 'axios';

// import User from "../icons/user.jsx"
// import Arrow from "../icons/arrow-up-right.jsx"

const URL = 'http://localhost:3001';

function BubbleItem({ postId, title, author, about, link, likes}) {
  const [isUnlikedHeart, setUnlikedHeart] = useState(true);

  const [likeCount, setLikes] = useState([])

  async function updateLikes() {
    try {
      // alert('Button was pressedsss!'); 
      const likedResponse = await axios.put(URL + '/posts/likes/'+ postId);
      setLikes(likedResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   updateLikes();
  // }, [likeCount]);


  function handleHeartClick() {
    setUnlikedHeart(!isUnlikedHeart);
    updateLikes(); 
  }

  return (
    <div className="bubble">
      <div className="text">
        <div className='topContainer'>
          <div className="title">{title}</div>
          <div className="heart" onClick={()=>{updateLikes()}}>
            {isUnlikedHeart ? (
              <LikedHeart />
            ) : (
              <LikedHeart />
            )} 
             <div className="likes">{likes}</div>
          </div>
        </div>
       
        <div className="author">{author}</div>
        <div className="about">{about}</div>

      </div>
      {link ?
        <div className='linking'>
          <a href={link} target="_blank" rel="noopener noreferrer">Sign Up</a>
        </div> : null}

    </div>

  );
}

export default BubbleItem;

