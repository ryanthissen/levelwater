import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashButton from '../dash-button.jsx';

describe('dash button', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<DashButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
