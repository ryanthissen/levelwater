import React from 'react';
import { shallow } from 'enzyme';
import OauthButton from '../oauth-button.jsx';
import toJson from 'enzyme-to-json';

describe('oauth button', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<OauthButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
