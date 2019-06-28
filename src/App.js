
// import all required libraries
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
//
import Navbar from './components/Navbar'
//
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
      <div className='App'>
        <Navbar />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About} />
        </BrowserRouter>
      </div>
  );
}

export default App;
