import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import TableContainer from './TableContainer.component';

describe('Table Container Component', () => {
  it('Should render all components', async () => {
    render(<TableContainer />);

    const sortByButton = screen.getByText(/sort by/i);
    expect(sortByButton).toBeInTheDocument();
    const nextButton = screen.getByText(/next/i);
    expect(nextButton).toBeInTheDocument();
  });
});
