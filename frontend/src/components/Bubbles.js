import React, { useState, useEffect } from 'react';
import "../styles/Bubbles.css";
import BubbleItem from "./BubbleItem";
import axios from 'axios';
import SearchBar from "../components/SearchBar";
import ListPage from './ListPage';
const URL = 'http://localhost:3001';

function Bubbles() {
  //Array of posts
  const [bubbles, setBubbles] = useState([]);
  const [searchResults, setSearchResults] = useState([])
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
  
  // useEffect(() => {
  //   getFeed().then(json => {
  //     setBubbles(json) // here it is not waiting? 
  //     setSearchResults(json) //
  //   })
  // }, [bubbles])

  return (
    <div>
    <SearchBar bubblePost={bubbles} setSearchResults={setSearchResults}/>
    <ListPage searchResults={searchResults}/>
    </div>
    )
  }
// in SB, we have the function to return the SW 
// here, take the title and then loop through that
// search thru titles and then grab their IDs and then 
// make new array of IDs and then replace the return statement 
//   return (
//     <div className="bubble-container">
//       {bubbles.map((bub) => {
  
//         return (<BubbleItem key={bub._id} title={bub.title} author={bub.user} link={bub.link} about={bub.content} />);
//       }).reverse()}
//     </div>
//   );
// }

export default Bubbles;
