import React from 'react';
import { shallow } from 'enzyme';
import { SourceForm } from './source-form.jsx';
import toJson from 'enzyme-to-json';

describe('source form', () => {
  it('renders a snapshot', () => {
    const tree = shallow(<SourceForm />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
