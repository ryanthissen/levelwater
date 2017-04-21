import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarHome from './components/nav/navbar-home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHome />
      </div>
    );
  }
}

export default App;
