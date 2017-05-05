import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import MainImage from '../main-image.jsx';

describe('main image', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainImage />, div);
  });
  it('renders a snapshot', () => {
    const tree = shallow(<MainImage />);
    expect(tree).toMatchSnapshot();
  });
});
