import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Home, Layanan, Alamat, Topic, Kontak, StateUp} from './views'
import Calculator from './views/StateUp';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Layanan/i);
  expect(linkElement).toBeInTheDocument();
});

