import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('should render correctly without crashing', () => {
  const component = shallow(<App/>);
  
  expect(component).toMatchSnapshot();
});