import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signup from '../signup.jsx';


describe('signup', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<Signup />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
