import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NavbarHome from './form-navbar.jsx';


describe('navbar home', () => {
  it('renders on the page', () => {
    const navBar = shallow(<NavbarHome />);
    expect(navBar.find('h1').text()).toEqual('levelwater.io');
  });
  it('renders a snapshot', () => {
    const tree = shallow(<NavbarHome />);
    expect(tree).toMatchSnapshot();
  });
});
