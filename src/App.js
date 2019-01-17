import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './compornents/navbar'
import User from './compornents/user'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <User />
      </div>
    );
  }
}

export default App;
