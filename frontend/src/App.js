import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
//import Profile from './pages/Profile';
import Navbar from "./Navbar"
import {Login} from './pages/Profile';

function App(){
  //const [currentForm, setCurrentForm] = useState('login'); // do i need
  return (
    <div>
    <Navbar/>
    <div className='App'>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/profile' element={<Login />}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;