import React, {useState} from "react";
import '../styles/Profile.css'

export default function Profile(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => { // pass in e to get state
        e.preventDefault(); // otherwise, page will be reloaded and we will lose input
        console.log(email); // have access bc state
    }
    return(
        <div className="loginstyle">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">email: </label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="emailname@gmail.com" id="email" name="email"/>
            <label htmlFor="password">password: </label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)}type="password" placeholder="*********" id="password" name="password"/>
            <button type="submit"> Log In</button>
        </form>
        <button>Don't have an account? Click here to register</button>
        <p>

        </p>
        <img src="/jwac_pic.png" alt=""/>
        <p>
            User: Joe Bruin
        </p>
        <p>
        Email: joebruin@gmail.com
        </p>
        <ul>
            <li>QWERHacks</li>
            <li>Alumni Networking Night</li>
            <li>HOTH</li>
        </ul>

        </div>
    )
}

