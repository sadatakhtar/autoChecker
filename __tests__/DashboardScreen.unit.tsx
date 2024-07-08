import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../screens/DashboardScreen'; // Adjust the import path according to your project structure

describe('Dashboard Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });



  // Add more tests here as needed
});