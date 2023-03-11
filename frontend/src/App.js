import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles/Components.css';
import Navbar from "./components/Navbar";
import NewPost from './components/NewPost';
import 'reactjs-popup/dist/index.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
      <NewPost />

    </div>

  );
}

export default App;