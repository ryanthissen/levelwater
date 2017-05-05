import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './footer.jsx';
import toJson from 'enzyme-to-json';

describe('footer', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<Footer />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
