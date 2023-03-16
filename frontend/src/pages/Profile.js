import React, { useState, useEffect } from "react";
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch, useAuthState } from '../context';
import { logout } from '../context/actions';
import "../styles/Bubbles.css";
import BubbleItem from "../components/BubbleItem.js";
import axios from 'axios';

const URL = 'http://localhost:3001';

function Profile() {
  //Array of posts
  const [userBubbles, setBubbles] = useState([]);

  async function getFeed() {
    try {
      const response = await axios.get(URL + '/posts');
      setBubbles(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFeed();
  }, [userBubbles]);

  const userDetails = useAuthState();

  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logout(dispatch);
    navigate('/login');
    return;
  };

  return (
    <div>
      <h1>What's poppin, {userDetails.username}</h1>
      <h2>Your posts:</h2>
      <div className="bubble-container">
        {userBubbles.map((bub) => {
          if (bub.user === userDetails.username) {
            return (<BubbleItem key={bub._id} title={bub.title} author={bub.user} link={bub.link} about={bub.content} />);
          }
          else return null;
        }).reverse()}
      </div>

      <div className="logoutButton">
        <button onClick={handleLogout} className='button'>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;