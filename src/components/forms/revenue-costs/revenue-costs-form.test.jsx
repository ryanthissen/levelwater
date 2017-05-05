import React from 'react';
import { shallow } from 'enzyme';
import { RevenueCostsForm } from './revenue-costs-form.jsx';
import toJson from 'enzyme-to-json';

describe('revenue and costs form', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<RevenueCostsForm />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
