import React from 'react';
import { shallow } from 'enzyme';
import About from '../about.jsx';
import toJson from 'enzyme-to-json';


describe('about', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<About />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
