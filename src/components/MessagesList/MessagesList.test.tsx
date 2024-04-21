import { describe, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '@/utils/renderWithProviders';
import MessagesList from '@/components/MessagesList/MessagesList';

describe('MessagesList', () => {
  it('should render loading when loading messages', () => {
    renderWithProviders(<MessagesList />);

    expect(screen.getByTestId('Loader')).toBeInTheDocument();
  });

  it('should render messages when loading completes', async () => {
    renderWithProviders(<MessagesList />);

    await waitFor(() => {
      expect(
        screen.getByText("Hola! I'd like to share my new book, 100 years of solitude")
      ).toBeInTheDocument();
    });
  });
});
