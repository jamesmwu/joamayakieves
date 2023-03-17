import BubbleItem from "../components/BubbleItem";
import React from "react";
import "../styles/Bubbles.css";

const ListPage = ({ searchResults }) => {
    return (
        <div className="bubble-container">{
            searchResults.length === 0 ? <p>No Matching Opportunities</p> :
                searchResults.map((bub) => {
                    return (<BubbleItem key={bub._id} postId={bub._id} title={bub.title} author={bub.user} link={bub.link} about={bub.content} likes={bub.likes} />);
                })
        }</div>
    );
};

export default ListPage;



