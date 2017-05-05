import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import About from '../about.jsx';

describe('about', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
  });
  it('renders a snapshot', () => {
    const tree = shallow(<About />);
    expect(tree).toMatchSnapshot();
  });
});
