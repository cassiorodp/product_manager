import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import PaginateButtons from './PaginateButtons.component';

describe('Paginate Buttons Component', () => {
  it('Should render all buttons', () => {
    render(<PaginateButtons />);

    const allButtons = screen.getAllByRole('button');
    expect(allButtons).toHaveLength(2);
  });

  it('Should change store by clicking', async () => {
    const { store, user } = render(<PaginateButtons />);

    const nextButton = screen.getByText(/next/i);
    const previousButton = screen.getByText(/previous/i);

    await user.click(nextButton);
    const updatedStateOne = store.getState().product;
    expect(updatedStateOne.page).toBe(2);

    await user.click(previousButton);
    const updatedStateTwo = store.getState().product;
    expect(updatedStateTwo.page).toBe(1);
  });
});
