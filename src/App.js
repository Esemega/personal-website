import React from 'react';
import Me from './components/Me/Me';
import Contact from './components/Contact/Contact.js';
import NavBar from './components/NavBar/NavBar.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Me />
      <Contact />
    </div>
  );
}

export default App;
