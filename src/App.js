import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarHome from './components/nav/navbar-home';
import MainImage from './components/home/main-image';
import About from './components/home/about';
import SupportImage from './components/home/support-image';
import Details from './components/home/details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHome />
        <MainImage />
        <About />
        <SupportImage />
        <Details />
      </div>
    );
  }
}

export default App;
