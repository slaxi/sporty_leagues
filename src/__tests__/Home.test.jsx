import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { describe, expect, it } from 'vitest';

describe('Home component', () => {
  it('should render the heading title', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
