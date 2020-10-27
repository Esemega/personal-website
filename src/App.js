import React from 'react';
import Me from './components/Me/Me';
import Contact from './components/Contact/Contact.js';
import NavBar from './components/NavBar/NavBar.js';
import ProjectsList from './components/ProjectsList/ProjectsList.js';
import data from './data.json';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Me />
      <ProjectsList data = {data.Projects}/>
      <Contact />
    </div>
  );
}

export default App;
