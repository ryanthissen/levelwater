import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashAnalysis from '../dash-analysis.jsx';

describe('dash analysis', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<DashAnalysis />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
