import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import LoginHome from "./pages/HomePage";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HouseInfo from './pages/HouseInfo';
import UserCenter from './pages/UserCenter';
import LandlordCenter from './pages/LandlordCenter';
import history from './history/History'

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes history={history}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<LoginHome />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/property/:id/:uid' element={<HouseInfo />} />
          <Route path='/user-center/:userid' element={<UserCenter />} />
          <Route path='/landlord-center/:userid' element={<LandlordCenter />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
