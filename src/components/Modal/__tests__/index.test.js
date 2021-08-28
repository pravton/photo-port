import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from '..';

const toggleModal = jest.fn();

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
  // baseline test
  it('renders', () => {
    <Modal currentPhoto={currentPhoto}/>
  });

  // snapshot test
  it('Matches snapshot of DOM', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);
    expect(asFragment()).toMatchSnapshot();
  })
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto} />);

    fireEvent.click(getByText('Close this modal'));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
  
})
