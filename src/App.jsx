import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Landingbooking from './pages/Landingbooking';
import History from './pages/History';
import Favorite from './pages/Favorite';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/landingbooking' element={<Landingbooking />} />
        <Route path='/history' element={<History />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </div>
  )
}

export default App