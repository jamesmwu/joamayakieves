import React from "react";
import Post from '../components/Post';
import Bubbles from "../components/Bubbles";
import '../styles/Home.css';

export default function Home() {
    return (
        <>
            <div className='homeStyle'>
                <p>HOME</p>
                <Post />
            </div>
            <div>
            <p>Hey bitch!</p>
                <Bubbles />
            </div>
        </>
    );
}
