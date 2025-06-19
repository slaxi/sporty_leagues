import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';

describe('App component', () => {
  it('should render the heading title', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
