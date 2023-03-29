import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <Navbar />
      {/* Body Section */}
      <Home />
    </div>
  );
}

export default App;
