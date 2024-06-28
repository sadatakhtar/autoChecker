import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../screens/DashboardScreen'; // Adjust the import path as necessary

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Dashboard Snapshot Test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});