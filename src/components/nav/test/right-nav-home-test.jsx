import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RightNavHome from '../right-nav-home.jsx';


describe('right nav home', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<RightNavHome />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
