import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Component/header/header'
import Footer from './Component/footer/footer'
import {Route} from 'react-router-dom'
import Router from './routes'

function App() {
  return (
    <div className="App">
      <Route component={Header}/>
      <Route component={Router}/>
      <Route component={Footer}/>
    </div>
  );
}

export default App;
