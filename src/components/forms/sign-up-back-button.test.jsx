import React from 'react';
import { shallow } from 'enzyme';
import { SignUpBackButton } from './sign-up-back-button.jsx';
import toJson from 'enzyme-to-json';

describe('sign up back button', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<SignUpBackButton />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
