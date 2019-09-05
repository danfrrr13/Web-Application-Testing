import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('Containes all neccesary text and buttons', () => {
  const container = render(<App />);
  container.getAllByText(/ball/i);
  container.getAllByText(/strike/i);
  container.getByText(/hit/i);
  container.getByText(/foul/i);
});

