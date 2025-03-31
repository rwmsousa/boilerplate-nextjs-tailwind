import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../../pages/index';

describe('Home page', () => {
  it('renders the welcome message', () => {
    render(<Home message="Test message" />);
    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
    expect(screen.getByText(/Next.js \+ NestJS!/i)).toBeInTheDocument();
  });
});