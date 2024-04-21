import { describe, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/renderWithProviders';

import ThreadPage from '@/pages/ThreadPage/ThreadPage';

describe('SendMessageForm', () => {
  it('should disable a Send Message button when messages are not loaded', () => {
    renderWithProviders(<ThreadPage />);

    expect(screen.getByTitle('Send message')).toBeDisabled();
  });

  it('should disable a Type New Message input when messages are not loaded', () => {
    renderWithProviders(<ThreadPage />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
