import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import c3Visuals from '../c3-visuals.jsx';

describe('c3 visuals', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<c3Visuals />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
