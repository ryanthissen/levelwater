import React from 'react';
import { shallow } from 'enzyme';
import { BasicInfoForm } from './basic-info-form.jsx';
import toJson from 'enzyme-to-json';

describe('basic info form', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<BasicInfoForm />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
