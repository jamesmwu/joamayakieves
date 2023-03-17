import React, { useState, useEffect } from 'react';
import "../styles/Bubbles.css";
import "../styles/SearchBar.css";
import axios from 'axios';
import SearchBar from "../components/SearchBar";
import SearchIcon from "../icons/search-icon.jsx";
import ListPage from './ListPage';
const URL = 'http://localhost:3001';

function Bubbles() {
  //Array of posts
  const [bubbles, setBubbles] = useState([]);
  const [flag, setFlag] = useState(true);
  const [search, setSearch] = useState('');

  async function getFeed() {
    try {
      const response = await axios.get(URL + '/posts');
      setBubbles(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  async function updateLikes(postId) {
    axios
      .put(URL + '/posts/likes/' + postId)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getFeed();
  }, [bubbles]);

  return (
    <div className='bubble-container'>
      <div className='searchContainer'>
        <SearchBar setSearch={setSearch} />
      </div>

      <ListPage bubbles={bubbles} searchResults={search} updateLikes={updateLikes} />
    </div>
  );
}

export default Bubbles;
