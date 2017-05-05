import React from 'react';
import { shallow } from 'enzyme';
import Login from '../login.jsx';
import toJson from 'enzyme-to-json';


describe('login', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<Login />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
