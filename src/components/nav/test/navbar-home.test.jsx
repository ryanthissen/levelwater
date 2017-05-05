import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavbarHome from '../navbar-home.jsx';


describe('navbar home', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<NavbarHome/>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
