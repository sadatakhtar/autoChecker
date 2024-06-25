import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Btn from '../components/Btn'; // Adjust the import path according to your project structure

describe('Btn Component Tests', () => {
  const onPressMock = jest.fn();

  // Test 1: Component renders without crashing
  it('renders without crashing', () => {
    const { getByText } = render(<Btn title="Test Button" onPress={onPressMock} />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  // Test 2: Button press
  it('calls onPress when pressed', () => {
    const { getByText } = render(<Btn title="Press Me" onPress={onPressMock} />);
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  // Test 3: Displays the correct title
  it('displays the correct title', () => {
    const { getByText } = render(<Btn title="Correct Title" onPress={onPressMock} />);
    expect(getByText('Correct Title')).toBeTruthy();
  });
});