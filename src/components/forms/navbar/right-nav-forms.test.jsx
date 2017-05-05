import React from 'react';
import { shallow } from 'enzyme';
import { RightNavForms } from './right-nav-forms.jsx';
import toJson from 'enzyme-to-json';

describe('right navbar forms', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<RightNavForms />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
