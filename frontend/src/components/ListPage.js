import BubbleItem from "../components/BubbleItem";
import React from "react";
import "../styles/Bubbles.css";

const ListPage = ({ bubbles, searchResults, updateLikes }) => {

    return (
        <div className="bubble-container">
            {
                bubbles.filter((bub) => {
                    return (
                        bub.title.toLowerCase().includes(searchResults.toLowerCase()) ||
                        bub.content.toLowerCase().includes(searchResults.toLowerCase()) ||
                        bub.user.toLowerCase().includes(searchResults.toLowerCase())
                    );
                })
                    .map((bub) => {
                        return (<BubbleItem key={bub._id} postId={bub._id} title={bub.title} author={bub.user} link={bub.link} about={bub.content} likes={bub.likes} updateLikes={updateLikes} />);
                    })
                    .reverse()
            }
        </div>
    );
};

export default ListPage;



