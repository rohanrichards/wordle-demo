import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders the heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /wordle clone/i })).toBeInTheDocument();
});
