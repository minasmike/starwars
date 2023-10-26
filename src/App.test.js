import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock the fetchData function
jest.mock('./api/api', () => ({
  __esModule: true,
  default: jest.fn((url) => {
    // Extract the page number from the URL
    const page = Number(url.split('=')[1]);

    // Define the mock response based on the page number
    const mockResponse = {
      results: [
        { name: `Movie ${page * 2 - 1}` },
        { name: `Movie ${page * 2}` },
      ],
    };

    return Promise.resolve(mockResponse);
  }),
}));

describe('App', () => {
  test('renders loading state initially', () => {
    render(<App />);

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  test('renders movie cards after data is fetched', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText('Detail').toBeInTheDocument())
    });
    expect(screen.getByText('Movie ')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

  test('navigates to next and previous pages', async () => {
    render(<App />);

    await waitFor(() => {
      const nextButton = screen.getByText('>').toBeInTheDocument();
      const previousButton = screen.getByText('<').toBeInTheDocument();

      userEvent.click(nextButton);
      expect(screen.getByText('Loading...')).toBeInTheDocument();

      userEvent.click(previousButton);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
});