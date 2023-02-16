import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from "./Navbar"

function App(){
  return (
    <>
    <Navbar/>
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  </>
  );
}

export default App;