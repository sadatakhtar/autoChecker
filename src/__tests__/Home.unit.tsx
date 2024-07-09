import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Home from '../screens/Home';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Home screen Snapshot Test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Home Component Tests', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen).not.toBeNull();
  });
});
