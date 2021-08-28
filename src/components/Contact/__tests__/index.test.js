import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Contact from '..'; 

afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<Contact />)
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  // check the textContent of h1 tag
  it('matches the textContent', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
  });

  it('matches the textContent of button', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('buttonTag')).toHaveTextContent('Submit');
  })
});

