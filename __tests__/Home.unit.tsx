import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Home from '../screens/Home'; 

describe('Home Component Tests', () => {
  // Test 1: Component renders without crashing
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen).not.toBeNull(); 
  });

  // Test 2: Check for welcome text
  it('displays the correct welcome text', () => {
    render(<Home />);
    const welcomeText = screen.getByText(/Welcome to AutoChecker, enter a vehicle registration to get a list of possible defects or issues which can surface in the near future./i);
    expect(welcomeText).toBeTruthy();
  });
});