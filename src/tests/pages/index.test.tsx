import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../../pages/index';

describe('Home page', () => {
  it('renders the home page', () => {
    render(<Home />);
    // Adicione aqui as asserções para verificar se a página foi renderizada corretamente
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});