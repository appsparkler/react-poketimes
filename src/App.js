
// import all required libraries
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
//
import Navbar from './components/Navbar'
//
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
