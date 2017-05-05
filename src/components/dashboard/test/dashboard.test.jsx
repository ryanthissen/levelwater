import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from '../dashboard.jsx';

describe('dashboard', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<Dashboard />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
