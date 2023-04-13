import React from 'react';
import { render } from '@testing-library/react';
import Component1 from './Component1';

test('renders the Component1', () => {
  const { getByText } = render(<Component1 />);
  const linkElement = getByText(/Component1/i);
  expect(linkElement).toBeInTheDocument();
});
