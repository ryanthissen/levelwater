import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import OauthRedirect from '../oauth-redirect.jsx';

describe('oauth redirect', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<OauthRedirect />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
