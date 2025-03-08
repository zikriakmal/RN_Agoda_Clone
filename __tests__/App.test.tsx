import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import App from '../App';

jest.useFakeTimers();

describe('App Component', () => {
  test('renders SplashScreen initially', async () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('splash-screen')).toBeTruthy();
  });

  test('navigates to Dashboard after timeout', async () => {
    const { getByTestId, queryByTestId } = render(<App />);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(queryByTestId('splash-screen')).toBeNull();
      expect(getByTestId('dashboard-screen')).toBeTruthy();
    });
  });

  test('renders bottom tab navigation', async () => {
    const { getByText } = render(<App />);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(getByText('Home')).toBeTruthy();
      expect(getByText('My Trips')).toBeTruthy();
      expect(getByText('Deals')).toBeTruthy();
      expect(getByText('Cart')).toBeTruthy();
      expect(getByText('More')).toBeTruthy();
    });
  });
});
