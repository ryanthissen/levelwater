import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SignupForm } from '../signup-form.jsx';


describe('signup form', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<SignupForm />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
