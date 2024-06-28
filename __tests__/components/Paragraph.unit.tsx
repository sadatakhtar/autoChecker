import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Paragraph from '../../components/Paragraph'; 

describe('Paragraph Component Tests', () => {
  it('renders with given text', () => {
    const testText = 'Test paragraph content';
    render(<Paragraph summary={testText} />);
    expect(screen.getByText(testText)).toBeTruthy();
  });

  it('applies custom styles', () => {
    const testText = 'Test paragraph with style';
    render(<Paragraph summary={testText}  />);
    const paragraphElement = screen.getByText(testText);
  });

});