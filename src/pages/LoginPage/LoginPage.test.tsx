import { describe, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/renderWithProviders';

import LoginPage from '@/pages/LoginPage/LoginPage';

describe('LoginPage', () => {
  it('should render public header', () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByText('Messenger app')).toBeInTheDocument();
  });

  it('should not render user avatar in header', async () => {
    renderWithProviders(<LoginPage />);

    expect(screen.queryByAltText(/photo in circle/i)).not.toBeInTheDocument();
  });

  it('should render empty footer', () => {
    renderWithProviders(<LoginPage />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
    expect(footer).toBeEmptyDOMElement();
  });

  it('should render login form', () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByLabelText('Recipient name')).toBeInTheDocument();
    expect(screen.getByLabelText('Avatar URL')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should automatically focus on the username input field when the page loads', () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByLabelText('Recipient name')).toHaveFocus();
  });
});
