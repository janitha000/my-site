import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Projects />
    </div>
  );
}

export default App;
