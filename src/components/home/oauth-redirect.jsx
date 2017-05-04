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
  }

  parseQueryParams(string) {
    string = string.substring(1);
    string = string.split('&');
    let token = (string[0].split('='))[1];
    let water_systems_id = (string[1].split('='))[1];

    localStorage.setItem('token', token);
    localStorage.setItem('water_systems_id', water_systems_id);

    console.log('token',token, 'watersysid', water_systems_id);

    if (water_systems_id === 'null') {
      this.props.history.push('/signup/step1')

    }

    else {

      this.props.history.push('/dashboard')
    }


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
