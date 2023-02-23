import React from 'react';
import Post from '../components/Post';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className='homeStyle'>
            <p>HOME</p>
            <Post />
        </div>
    );
}
