import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Details from '../details.jsx';


describe('details', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<Details />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
