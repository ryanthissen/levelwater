import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import OauthRedirect from '../oauth-redirect.jsx';

describe('oauth-redirect', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OauthRedirect />, div);
  });
  it('renders a snapshot', () => {
    const tree = shallow(<OauthRedirect />);
    expect(tree).toMatchSnapshot();
  });
});
