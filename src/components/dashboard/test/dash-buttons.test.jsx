import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {DashButtons} from '../dash-buttons.jsx';

describe('dash buttons', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<DashButtons />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
