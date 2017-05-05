import React from 'react';
import { shallow } from 'enzyme';
import { PumpingDistForm } from './pumping-dist-form.jsx';
import toJson from 'enzyme-to-json';

describe('pumping and distribution form', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<PumpingDistForm />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
