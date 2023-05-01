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
import Orders from './Components/Order/Orders';

const promise = loadStripe(
  'pk_test_51N2VilJLa1Q9hurIX6cm2Su1V2ynonrMllDUNwcCSXl0LRg3Fm2fMiqh7qArZU5YDVP1ReEZaIklkX4doMQ2rTjP00B8IhqfZB');

function App() {

  const [{ }, dispatch] = useStateValue();


  // this will only run once when the app component loads
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      // console.log("User logins or logut");
      if (authUser) {
        // the user just logged in /the user was logged in
        // console.log("User logins");

        dispatch({
          type: 'SET_USER',
          user: authUser
        });

      } else {
        // the user was logged out
        // console.log("User logut");

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
          <Route path='/orders' element={<OrdersWithHeader />} />
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

const OrdersWithHeader = () => {
  return (
    <>
      <Navbar />
      <Orders />
    </>
  );
}

export default App;
