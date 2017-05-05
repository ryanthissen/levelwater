import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainImage from '../main-image.jsx';

describe('main image', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<MainImage />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
