import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../context/context.js';
import { loginUser } from '../context/actions.js';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const navigate = useNavigate();

    const handleSignup = () => {
        dispatch({ type: 'NEW_ACTION' });
        navigate('/signup');
    };

    const handleLogin = async err => {
        const payload = {
            username: username,
            password: password
        };
        try {
            const res = await loginUser(dispatch, payload);
            if (!res) return;
            else {
                navigate('/home');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='loginStyle'>
            <div>
                <div className='userInput'>
                    <h1>Username</h1>
                    <input
                        className='profInput'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        type='text'
                        placeholder='Username here!'
                        disabled={loading}
                    />
                </div>

                <div className='userInput'>
                    <h1>Password</h1>
                    <input
                        className='profInput'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                        placeholder='Password here!'
                        disabled={loading}
                    />
                </div>
            </div>
            {errorMessage ? <p className='error'>{errorMessage}</p> : null}

            <div className='btnContainer'>
                <button onClick={handleLogin} disabled={loading}>
                    Log In
                </button>
                <button onClick={handleSignup} disabled={loading}>
                    Sign Up
                </button>
            </div>

        </div>
    );

}

export default Login;


