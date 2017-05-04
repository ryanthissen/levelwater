import React from 'react';
import { Route } from 'react-router-dom';

const logUserOut = (callback) => {
  localStorage.clear();
  callback();
};

const RightNavForms = () => (
  <Route render={({ history }) => (
    <div className="ui buttons">
    <button className="ui button" onClick={(event) => {
      event.preventDefault();
      logUserOut(() => history.push('/'));
    }}>Log Out</button>
    </div>
  )} />
);

export default RightNavForms;
