import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import { Field, reduxForm } from 'redux-form';
import { submitSourceInfo } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.sourceForm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitSourceInfo }, dispatch);
};

class SourceForm extends Component {

  render() {
    return (
      <div id="source-form">
        <SignUpStep step="3" />
        <div className="ui grid">

        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SourceForm);
