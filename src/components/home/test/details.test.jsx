import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Details from '../details.jsx';


describe('details', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Details />, div);
  });
  it('renders a snapshot', () => {
    const tree = shallow(<Details />);
    expect(tree).toMatchSnapshot();
  });
});
