import React, {Component} from 'react';
import { logUserIn } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router,
Route,
Link,
} from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ logUserIn }, dispatch);
};

export class DemoButton extends Component{
  render() {
    return (
      <Route render={({ history }) => (
        <button className="ui button" onClick={(event) => {
          event.preventDefault();
          this.props.logUserIn('alex83@gmail.com', 'something',() => {
            history.push('/dashboard');
          }
        )}}>
          Try It!</button>

        )} />
    );
  }
}





export default connect (mapDispatchToProps)(DemoButton);
