import React from 'react';
import { shallow } from 'enzyme';
import { FormFooter } from './form-footer.jsx';
import toJson from 'enzyme-to-json';

describe('basic info form', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<FormFooter />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
