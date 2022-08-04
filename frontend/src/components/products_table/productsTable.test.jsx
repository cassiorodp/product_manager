import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import ProductsTable from './ProductsTable.component';
import products from '../../mocks/mockResponses';
import * as reduxActions from '../../redux/slices/productSlice';

describe('Products Table Component', () => {
  it('Should render all passed products', () => {
    render(<ProductsTable products={products} />);
    const tableRows = screen.getAllByRole('row');

    expect(tableRows).toHaveLength(products.length + 1);
  });

  it('Should call a dispatch when the button is clicked', async () => {
    const actionSpy = jest.spyOn(reduxActions, 'changeFormState');
    const { user } = render(<ProductsTable products={products} />);
    const buttons = screen.getAllByRole('button');

    await user.click(buttons[0]);

    expect(actionSpy).toHaveBeenCalled();
  });
});
