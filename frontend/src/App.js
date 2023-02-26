import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from "./Navbar"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App(){
  return (
    <div>
    <Navbar/>
    <div className='App'>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
    
    <Popup trigger={
      <button> New Post </button>
    }
    modal nested>
      {
        close => (
          <div className='modal'>
            <div className='content'>
              New Post
            </div>
            <div>
              <button onClick={
                () => close()
              }>
                Close
              </button>
            </div>
          </div>
        )
      }
    </Popup>
  </div>

  );
}

export default App;