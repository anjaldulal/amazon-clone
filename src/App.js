import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes >
          <Route path='/' element={<HomeWithHeader />} />
          <Route path='/login' element={<Login />} />  {/* rendering login page without header */}
          <Route path='/checkout' element={<CheckoutWithHeader />} />
        </Routes>
      </div>
    </Router>
  );
}

// wrapping header and home page
const HomeWithHeader = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

// wrapping header and checkout page
const CheckoutWithHeader = () => {
  return (
    <>
      <Navbar />
      <Checkout />
    </>
  );
}

export default App;
