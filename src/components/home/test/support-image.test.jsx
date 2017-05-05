import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SupportImage from '../support-image.jsx';

describe('support image', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<SupportImage />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
