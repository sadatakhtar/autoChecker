import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import DetailsDisplayer from '../../components/DetailsDisplayer'; 

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('DetailsDisplayer screen Snapshot Test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DetailsDisplayer  label='test' data="Test data"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('DetailsDisplayer Component Tests', () => {
  it('renders without crashing', () => {
    render(<DetailsDisplayer label='test' data="Test data"/>);
    expect(screen).not.toBeNull(); 
  });

});