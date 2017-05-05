import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../login-form.jsx';
import toJson from 'enzyme-to-json';

describe('login form', () => {

  it('renders a snapshot', () => {
    const tree = shallow(<LoginForm />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
