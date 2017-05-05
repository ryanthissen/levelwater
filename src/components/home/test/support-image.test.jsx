import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import SupportImage from '../support-image.jsx';

describe('support image', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SupportImage />, div);
  });
  it('renders a snapshot', () => {
    const tree = shallow(<SupportImage />);
    expect(tree).toMatchSnapshot();
  });
});
