import React from 'react';
import * as asyncActions from '../../redux/async_actions/productActions';
import { initialState } from '../../redux/slices/productSlice';
import { render, screen } from '../../test-utils/testing-library-utils';
import ProductForm from './ProductForm.component';

describe('Product Form Component', () => {
  let preloadedState;
  beforeEach(() => {
    preloadedState = {
      product: { ...initialState, formState: true },
    };
  });

  it('Should render all components', () => {
    render(<ProductForm />, { preloadedState });

    const nameInput = screen.getByLabelText(/name/i);
    const priceInput = screen.getByLabelText(/price/i);
    const yesInput = screen.getByLabelText(/yes/i);
    const noInput = screen.getByLabelText(/no/i);
    const fabDateInput = screen.getByLabelText(/fabrication date/i);

    expect(nameInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(yesInput).toBeInTheDocument();
    expect(noInput).toBeInTheDocument();
    expect(fabDateInput).toBeInTheDocument();
  });

  it('Should submit when all components are valid', async () => {
    preloadedState.product = {
      ...initialState,
      userAction: 'add',
      formState: true,
    };
    const { user } = render(<ProductForm />, { preloadedState });
    const actionSpy = jest.spyOn(asyncActions, 'postProduct');

    const nameInput = screen.getByLabelText(/name/i);
    const priceInput = screen.getByLabelText(/price/i);
    const yesInput = screen.getByLabelText(/yes/i);
    const fabDateInput = screen.getByLabelText(/fabrication date/i);
    const submitButton = screen.getByRole('button');

    await user.click(yesInput);
    const expDateInput = screen.getByLabelText(/expire date/i);

    await user.type(nameInput, 'test product');
    await user.type(priceInput, '100');
    await user.type(fabDateInput, '10/01/2022');
    await user.type(expDateInput, '11/01/2022');
    await user.click(submitButton);

    expect(actionSpy).toHaveBeenCalled();
  });
});
