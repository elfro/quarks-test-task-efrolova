import { describe, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { setupStore } from '@/app/store';
import { renderWithProviders } from '@/utils/renderWithProviders';

import ThreadPage from '@/pages/ThreadPage/ThreadPage';

const mockUser = {
  username: 'foobar',
  avatarURL: 'http://foobar.com',
  id: 'mock_id',
};

describe('ThreadPage', () => {
  it('should show loader when messages are not loaded', () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    expect(screen.getByTestId('Loader')).toBeInTheDocument();
  });

  it('should render messages when they are loaded', async () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    await waitFor(() => {
      expect(
        screen.getByText("Hola! I'd like to share my new book, 100 years of solitude")
      ).toBeInTheDocument();
    });
  });

  it('should not show loader when the messages are loaded', async () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    const loader = screen.queryByTestId('Loader');
    await screen.findByText("Hola! I'd like to share my new book, 100 years of solitude");

    expect(loader).not.toBeInTheDocument();
  });

  it('should automatically focus on the New Message input field when the page loads', async () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    await waitFor(() => {
      expect(screen.queryByTestId('the Loader')).not.toBeInTheDocument();
    });

    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('should add a message to the document when form is submitted by pressing Enter', async () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    await screen.findByText("Hola! I'd like to share my new book, 100 years of solitude");

    const messageInput = screen.getByRole('textbox');

    await userEvent.click(messageInput);
    await userEvent.paste('test message, please ignore');
    await userEvent.keyboard('{Enter}');

    expect(screen.getByText('test message, please ignore')).toBeInTheDocument();
  });

  it('should add a message to the document when form is submitted by clicking on Send Message button', async () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    await screen.findByText("Hola! I'd like to share my new book, 100 years of solitude");

    const messageInput = screen.getByRole('textbox');
    const sendMessageButton = screen.getByTitle('Send message');

    await userEvent.click(messageInput);
    await userEvent.paste('test message, please ignore');
    await userEvent.click(sendMessageButton);

    expect(screen.getByText('test message, please ignore')).toBeInTheDocument();
  });

  it('should automatically focus on the New Message input field when the message has been sent', async () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    await screen.findByText("Hola! I'd like to share my new book, 100 years of solitude");

    const messageInput = screen.getByRole('textbox');
    const sendMessageButton = screen.getByTitle('Send message');

    await userEvent.click(messageInput);
    await userEvent.paste('test message, please ignore');
    await userEvent.click(sendMessageButton);

    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('should render username in header', async () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toHaveTextContent(mockUser.username);
  });

  it('should render user avatar in header', async () => {
    renderWithProviders(<ThreadPage />, {
      store: setupStore({
        user: mockUser,
      }),
    });

    expect(screen.getByAltText(/photo in circle/i)).toBeInTheDocument();
  });
});
