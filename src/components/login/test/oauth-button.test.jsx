import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import OauthButton from '../oauth-button.jsx';


describe('oauth button', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<OauthButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
