import React from 'react';
import { shallow } from 'enzyme';
import { SignUpStep } from './sign-up-step.jsx';
import toJson from 'enzyme-to-json';

describe('sign up step', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<SignUpStep />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
