import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Has main component', () => {
  const app = render(<App/>);
  expect(app.contains(<List/>)).toBe(true);
}) 