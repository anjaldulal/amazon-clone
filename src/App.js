import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51N16RMSD8cmKL1k1iTB5MwKFqL61RyOZfwDSh7zIwlsvfBuUuTFp0XfNVbhUe7vhWlCJPpJiYeEPF1HYfteDWtLS00yMCayaON');

function App() {

  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    // this will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // the user just logged in /the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        });

      } else {
        // the user was logged out

        dispatch({
          type: 'SET_USER',
          user: null
        });

      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes >
          <Route path='/' element={<HomeWithHeader />} />
          <Route path='/login' element={<Login />} />  {/* rendering login page without header */}
          <Route path='/checkout' element={<CheckoutWithHeader />} />
          <Route path='/payment' element={<PaymentWithHeader />} />
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
const PaymentWithHeader = () => {
  return (
    <>
      <Navbar />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </>
  );
}

export default App;
