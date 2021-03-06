import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]

const mockCurrentCategory = jest.fn();
const mockSetCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetConatctSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  it('renders', () => { 
    render(<Nav 
      categories={categories}
      setCategory={mockSetCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setConatctSelected={mockSetConatctSelected}
    />)
  });
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav 
      categories={categories}
      setCategory={mockSetCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setConatctSelected={mockSetConatctSelected}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Emoji Test
describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav 
      categories={categories}
      setCategory={mockSetCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setConatctSelected={mockSetConatctSelected}
    />);
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

// Link visibility test
describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav 
      categories={categories}
      setCategory={mockSetCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setConatctSelected={mockSetConatctSelected}
    />);
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  })
});