import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DemoButton from '../demo-button.jsx';

describe('oauth button', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<DemoButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
