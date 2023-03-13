import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles/Components.css';
import Navbar from "./components/Navbar";
import 'reactjs-popup/dist/index.css';

function App() {
  //const [currentForm, setCurrentForm] = useState('login'); // do i need
  return (
    <div>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;