import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import ConfigurationButtons from './ConfigurationButtons.component';

describe('Configuration Buttons Component', () => {
  it('Should render all components', () => {
    render(<ConfigurationButtons />);

    const AddButton = screen.getByText(/add product/i);
    const sortSelect = screen.getByLabelText(/sort by/i);
    const orderSelect = screen.getByLabelText(/order by/i);

    expect(AddButton).toBeInTheDocument();
    expect(sortSelect).toBeInTheDocument();
    expect(orderSelect).toBeInTheDocument();
  });

  it('Should change store when interacting', async () => {
    const { store, user } = render(<ConfigurationButtons />);

    const AddButton = screen.getByText(/add product/i);
    const sortSelect = screen.getByLabelText(/sort by/i);
    const orderSelect = screen.getByLabelText(/order by/i);

    await user.click(AddButton);
    await user.selectOptions(sortSelect, ['expDate']);
    await user.selectOptions(orderSelect, ['desc']);
    const updatedStore = store.getState().product;

    expect(updatedStore.formState).toBeTruthy();
    expect(updatedStore.sortParam).toBe('expDate');
    expect(updatedStore.orderParam).toBe('desc');
  });
});
