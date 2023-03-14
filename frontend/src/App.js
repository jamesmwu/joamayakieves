import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './styles/Components.css';
import Navbar from "./components/Navbar";
import { useAuthState } from './context/context.js';
import 'reactjs-popup/dist/index.css';

const ProtectedRoute = ({ redirectPath = '/login', children }) => {
  const userDetails = useAuthState();
  if (!userDetails.token) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

function App() {
  //const [currentForm, setCurrentForm] = useState('login'); // do i need
  return (
    <div>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;