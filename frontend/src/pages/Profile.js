import React, { useState } from "react";
import '../styles/Profile.css';

export default function Profile() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => { // pass in e to get state
        e.preventDefault(); // otherwise, page will be reloaded and we will lose input
        console.log(user); // have access bc state
        console.log(pass);
    };
    return (
        <div className="loginStyle">
            <div>
                <div className="userInput">
                    <h1>Username</h1>
                    <input className='profInput' value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Username here!" />

                </div>

                <div className="userInput">
                    <h1>Password</h1>
                    <input className='profInput' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password here!" />

                </div>
            </div>
            <button className="userInput" onClick={handleSubmit}> Log In / Register</button>
        </div>
    );
}

