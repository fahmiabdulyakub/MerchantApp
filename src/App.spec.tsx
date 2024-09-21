import React from 'react';
import {render} from '@testing-library/react-native';
import App from './App';

jest.mock('@navigators/RootNavigator', () => {
  return function MockedRootNavigator() {
    return null;
  };
});

describe('App', () => {
  it('renders without crashing', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});
