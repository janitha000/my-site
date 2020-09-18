import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Blogs from './components/Blog/Blogs'
import Contact from './components/Contact/Contact'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/articles" component={Blogs} />
          <Route path="/contact" component={Contact} />
        </Switch>


      </div>
    </Router>

  );
}

export default App;
