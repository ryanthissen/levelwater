import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FixedCostsGraph } from '../fixed-costs-graph.jsx';

describe('fixed costs graph', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<FixedCostsGraph />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
