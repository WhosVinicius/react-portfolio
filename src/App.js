import React from 'react';
import './App.css';
import About from './components/About/About.jsx'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div
      className="App">

      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </div>

  );
}

export default App;
