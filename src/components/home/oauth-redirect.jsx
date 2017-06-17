import React, {Component} from 'react';
const queryString = require('query-string');
import {
  BrowserRouter as Router,
  Route, browserHistory
} from 'react-router-dom';


class OauthRedirect extends Component {

  componentDidMount() {
    if (location.search) {
      this.parseQueryParams(location.search);
    }
    this.redirect();
  }

  redirect() {
    let profileStepCompleted = localStorage.getItem('profileStepCompleted');
    if (profileStepCompleted === 'none') {
      this.props.history.push('/signup/step1');
    } else if (profileStepCompleted === 'basic') {
      this.props.history.push('/signup/step2');
    } else if (profileStepCompleted === 'revenue') {
      this.props.history.push('/signup/step3');
    } else if (profileStepCompleted === 'source') {
      this.props.history.push('/signup/step4');
    } else if (profileStepCompleted === 'treatment') {
      this.props.history.push('/signup/step5');
    } else if (profileStepCompleted === 'storage') {
      this.props.history.push('/signup/step6');
    } else if (profileStepCompleted === 'distribution') {
      this.props.history.push('/dashboard');
    } else if (profileStepCompleted === 'algorithm') {
      this.props.history.push('/dashboard');
    }
  }

  parseQueryParams(string) {
    string = string.substring(1);
    string = string.split('&');
    let token = (string[0].split('='))[1];
    let profileStepCompleted = (string[1].split('='))[1];
    let water_systems_id = (string[2].split('='))[2];
    let showPword = (string[3].split('='))[3];
    localStorage.setItem('token', token);
    localStorage.setItem('profileStepCompleted', profileStepCompleted);
    localStorage.setItem('water_systems_id', water_systems_id);
    localStorage.setItem('showPword', showPword)
  }

  render() {
    return (
            <Route render={({ history }) => (
      <div></div>
            )} />
    );
  }

}

export default OauthRedirect;
