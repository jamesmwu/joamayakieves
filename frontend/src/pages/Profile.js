import React, { useState } from "react";
import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch, useAuthState } from '../context';
import { logout } from '../context/actions';

export default function Profile() {

    const navigate = useNavigate();
    const dispatch = useAuthDispatch();
    const handleLogout = () => {
        logout(dispatch);
        navigate('/login');
        return;
    };

    const userDetails = useAuthState();

    return (
        <div>
            <h1>What's Poppin {userDetails.username}</h1>
            <button onClick={handleLogout} className='button'>
                Logout
            </button>
        </div>
    );
}

