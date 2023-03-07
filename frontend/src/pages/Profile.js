import React, {useState} from "react";
import '../styles/Profile.css'

export const Login = () =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => { // pass in e to get state
        e.preventDefault(); // otherwise, page will be reloaded and we will lose input
        console.log(email); // have access bc state
    }
    return(
        <div className="pagestyle">
        <div className="loginstyle">
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email: </label>
            <div className="Textboxstyle">
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="emailname@gmail.com" id="email" name="email"/>
           </div>
            <label htmlFor="password">password: </label>
            <div className="Textboxstyle">
            <input value={pass} onChange={(e)=> setPass(e.target.value)}type="password" placeholder="*********" id="password" name="password"/>
            </div>
            <button>Log In</button>
        </form>
        <button>Don't have an account? Click here to register</button>
        </div>
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

/*
export default function Profile() {
    return (
        <p>PROFILE</p>
    );
  
} */