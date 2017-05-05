import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashHeader from '../dash-header.jsx';

describe('dash header', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<DashHeader />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
