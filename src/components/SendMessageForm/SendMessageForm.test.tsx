import { describe, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/renderWithProviders';
import { setupStore } from '@/app/store';

import SendMessageForm from '@/components/SendMessageForm/SendMessageForm';

describe('SendMessageForm', () => {
  it('should disable a Send Message button when messages are loading', () => {
    renderWithProviders(<SendMessageForm />, {
      store: setupStore({
        messages: {
          loading: true,
          messages: [],
          error: undefined,
        },
      }),
    });

    expect(screen.getByTitle('Send message')).toBeDisabled();
  });

  it('should disable a Type New Message input when messages are loading', () => {
    renderWithProviders(<SendMessageForm />, {
      store: setupStore({
        messages: {
          loading: true,
          messages: [],
          error: undefined,
        },
      }),
    });

    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should disable a Send Message button if an error occurs while retrieving messages', () => {
    renderWithProviders(<SendMessageForm />, {
      store: setupStore({
        messages: {
          loading: false,
          messages: [],
          error: 'Mock error',
        },
      }),
    });

    expect(screen.getByTitle('Send message')).toBeDisabled();
  });

  it('should disable a Type New Message input if an error occurs while retrieving messages', () => {
    renderWithProviders(<SendMessageForm />, {
      store: setupStore({
        messages: {
          loading: false,
          messages: [],
          error: 'Mock error',
        },
      }),
    });

    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
