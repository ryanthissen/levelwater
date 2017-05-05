import React from 'react';
import { shallow } from 'enzyme';
import { StorageForm } from './storage-form.jsx';
import toJson from 'enzyme-to-json';

describe('storage form', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<StorageForm />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
