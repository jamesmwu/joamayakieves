import React, { useState, useEffect } from 'react';
import "../styles/Bubbles.css";
import BubbleItem from "./BubbleItem";
import axios from 'axios';

const URL = 'http://localhost:3001';

function Bubbles() {
  //Array of posts
  const [bubbles, setBubbles] = useState([]);

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
  }, [bubbles]);

  return (
    <div className="bubble-container">
      {bubbles.map((bub) => {
        return (<BubbleItem key={bub._id} title={bub.title} author={bub.user} about={bub.content} />);
      })}
    </div>
  );
}

export default Bubbles;
