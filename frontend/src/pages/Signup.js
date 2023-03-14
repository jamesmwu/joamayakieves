import '../styles/Profile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../context/context.js';
import { loginUser } from '../context/actions.js';

const URL = 'http://localhost:3001';

function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const navigate = useNavigate();

    const createUser = async () => {
        try {
            dispatch({ type: 'REQUEST_SIGNUP' });
            const res = await axios.post(URL + '/users/create', {
                username: username,
                password: password
            });
            const data = res.data;
            console.log(data);
            if (!data.error) { // valid signup 
                dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
                handleLogin();
            }
            else {
                dispatch({ type: 'SIGNUP_ERROR', payload: data.error });
            }
        } catch (err) {
            dispatch({ type: 'SIGNUP_ERROR', error: err });
        }
    };

    function goBack() {
        dispatch({ 'type': 'NEW_ACTION' });
        navigate('/login');
    }

    const handleLogin = async (err) => {
        const payload = {
            username: username,
            password: password,
        };
        console.log(payload);
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
                <button onClick={createUser} disabled={loading}>
                    Sign Up
                </button>
                <button onClick={goBack} disabled={loading}>
                    Go back
                </button>
            </div>

        </div>
    );
}

export default SignupPage;