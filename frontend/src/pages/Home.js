import React, { useState } from "react";
import Bubbles from "../components/Bubbles";
import NewPost from '../components/NewPost';
import '../styles/Home.css';
import axios from 'axios';
import { useAuthState } from '../context/context.js';

const URL = 'http://localhost:3001';


export default function Home() {
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [newPostLink, setNewPostLink] = useState('');

    const userDetails = useAuthState();

    //Lets user add new post
    async function addPost() {
        //Catches if user doesn't enter text
        if (newPostTitle === '' || newPostContent === '') {
            console.log('You must enter all required values!');
            return;
        }

        axios
            .post(URL + '/posts/create', {
                user: userDetails.username,
                title: newPostTitle,
                content: newPostContent,
                link: newPostLink,
                likes: 0
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        setNewPostTitle('');
        setNewPostContent('');
    }

    return (
        <div>
            <Bubbles />
            <NewPost newPostTitle={newPostTitle} setNewPostTitle={setNewPostTitle} newPostContent={newPostContent} setNewPostContent={setNewPostContent} newPostLink={newPostLink} setNewPostLink={setNewPostLink} addPost={addPost} />
        </div>
    );
}