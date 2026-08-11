import { render, screen } from '@testing-library/react';
import App from './App';

test('renders company brand in the hero', () => {
  render(<App />);
  expect(
    screen.getAllByText(/Summit Enterprises, LLC/i).length
  ).toBeGreaterThan(0);
});
