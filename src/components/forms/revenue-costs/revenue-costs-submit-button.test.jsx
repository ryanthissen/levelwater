import React from 'react';
import { shallow } from 'enzyme';
import { RevenueCostsSubmitButton } from './revenue-costs-submit-button.jsx';
import toJson from 'enzyme-to-json';

describe('revenue and costs submit button', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<RevenueCostsSubmitButton />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
