import React from 'react';
import "../styles/Bubbles.css";
import LikedHeart from "../icons/liked-heart.jsx";
// import UnlikedHeart from "../icons/unliked-heart.jsx";
import axios from 'axios';
import Trash from '../icons/Trash-Icon.png';

// import User from "../icons/user.jsx"
// import Arrow from "../icons/arrow-up-right.jsx"

const URL = 'http://localhost:3001';

function BubbleItem({ postId, title, author, about, link, likes, profile }) {


  async function updateLikes() {
    axios
      .put(URL + '/posts/likes/' + postId)
      .catch(function (error) {
        console.log(error);
      });
  }

  async function deletePost() {
    axios.delete(URL + '/posts/delete/' + postId)
      .catch(function (error) { console.log(error); });
  }

  return (
    <div className="bubble">
      <div className="text">
        <div className='topContainer'>
          <div className="title">{title}</div>
          <div className="heart" onClick={() => { updateLikes(); }}>
            <LikedHeart />
            <div className="likes">{likes}</div>
          </div>
        </div>
        <div className="author">{author}</div>
        <div className="about">{about}</div>

      </div>

      <div className='modalBottom'>
        {link ?
          <div className='linking'>
            <a href={link} target="_blank" rel="noopener noreferrer">Sign Up</a>
          </div> : null}
        {
          profile ?
            <img src={Trash} alt='Delete Post' onClick={() => { deletePost(); }} /> : null
        }
      </div>


    </div>

  );
}

export default BubbleItem;


