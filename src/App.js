import React from 'react';
import Me from './components/Me/Me';
import Contact from './components/Contact/Contact.js';
import NavBar from './components/NavBar/NavBar.js';
import Project from './components/Project/Project.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Me />
      <Project 
      image='../../../img/robofriends.jpg' 
      name='Robofriends' 
      description='Simple App to start with APIs.'
      code='https://github.com/Esemega/robofriends'
      live='https://esemega.github.io/robofriends/'
      />
      <Contact />
    </div>
  );
}

export default App;
