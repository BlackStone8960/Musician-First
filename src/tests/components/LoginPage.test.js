import React from 'react';
import { shallow } from 'enzyme';
import { TopPage } from '../../components/TopPage';

let startLogin, wrapper;
beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<TopPage startLogin={startLogin} />);
});

test('should render Login Page correctly', () => {
  // const wrapper = shallow(<TopPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});