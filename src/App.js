import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarHome from './components/nav/navbar-home';
import MainImage from './components/home/main-image';
import About from './components/home/about';
import SupportImage from './components/home/support-image';
import Details from './components/home/details';
import Footer from './components/footer/footer';
import Login from './components/login/login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <div className ="App">
        <Route exact path="/" component={NavbarHome} />
        <Route exact path="/" component={MainImage} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={SupportImage} />
        <Route exact path="/" component={Details} />

        <Route exact path="/login" component={NavbarHome} />
        <Route exact path="/login" component={MainImage} />
        <Route exact path="/login" component={About} />
        <Route exact path="/login" component={SupportImage} />
        <Route exact path="/login" component={Details} />
        <Route exact path="/login" component={Login} />

        <Route path="/" component={Footer} />
      </div>
    </Router>
    );
  }
}

export default App;
