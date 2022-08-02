import { rest } from 'msw';
import { BASE_URL } from '../api';
import products from '../mocks/mockResponses';
import server from '../mocks/server';
import {
  changeOrderParamAndUpdate,
  changePageAndUpdate,
  changeSortParamAndUpdate,
  deleteProduct,
  getProductsPerPage,
  postProduct,
  updateProduct,
} from './async_actions/productActions';
import productReducer, {
  changeFormState,
  changeOrderParam,
  changePage,
  changeSortParam,
  changeUserAction,
  initialState,
} from './slices/productSlice';
import store from './store';

describe('Test manager slice', () => {
  const state = { ...store.getState().product };
  it('Should return the initial values', () => {
    expect(state).toEqual(initialState);
  });

  it('Should change page', () => {
    const mockCounter = 1;

    const updatedState = productReducer(state, changePage(mockCounter));

    expect(updatedState.page).toBe(mockCounter + 1);
  });

  it('Should change FormState', () => {
    const mockStateAdd = 'add';
    const mockStateEdit = 'edit';
    const mockStateClose = '';

    const updatedStateAdd = productReducer(state, changeFormState(mockStateAdd));
    expect(updatedStateAdd.formState).toBe(true);

    const updatedStateEdit = productReducer(state, changeFormState(mockStateEdit));
    expect(updatedStateEdit.formState).toBe(true);

    const updatedStateClose = productReducer(state, changeFormState(mockStateClose));
    expect(updatedStateClose.formState).toBe(false);
  });

  it('Should change userAction', () => {
    const mockAction = 'update';

    const updatedState = productReducer(state, changeUserAction(mockAction));

    expect(updatedState.userAction).toBe(mockAction);
  });

  it('Should change sortParam', () => {
    const mockSortParam = 'expDate';

    const updatedState = productReducer(state, changeSortParam(mockSortParam));

    expect(updatedState.sortParam).toBe(mockSortParam);
  });

  it('Should change orderParam', () => {
    const mockOrderParam = 'desc';

    const updatedState = productReducer(
      state,
      changeOrderParam(mockOrderParam),
    );

    expect(updatedState.orderParam).toBe(mockOrderParam);
  });

  it('Should getProducts async action', async () => {
    const mockUserParams = { page: 1, sortParam: 'fabDate', orderParam: 'asc' };
    const result = await store.dispatch(getProductsPerPage(mockUserParams));
    const mockProducts = result.payload;

    expect(result.type).toBe('product/getProductsPerPage/fulfilled');
    expect(mockProducts.data).toEqual(products);

    const updatedState = store.getState().product;

    expect(updatedState.products).toEqual(products);
  });

  it('Should getProducts reject async action case', async () => {
    server.resetHandlers(
      rest.get(`${BASE_URL}/products`, (req, res, ctx) => res(ctx.status(500))),
    );

    const mockUserParams = { page: 1, sortParam: 'fabDate', orderParam: 'asc' };
    const result = await store.dispatch(getProductsPerPage(mockUserParams));

    expect(result.type).toBe('product/getProductsPerPage/rejected');

    const updatedState = store.getState().product;

    expect(updatedState.loadingProducts).toBeFalsy();
  });

  it('Should changePageAndUpdate async action case', async () => {
    const mockCounter = 1;
    const result = await store.dispatch(changePageAndUpdate(mockCounter));

    expect(result.type).toBe('product/changePageAndUpdate/fulfilled');

    const updatedState = store.getState().product;

    expect(updatedState.page).toBe(mockCounter + 1);
    expect(updatedState.products).toEqual(products);
  });

  it('Should changeSortParamAndUpdate async action case', async () => {
    const mockParam = 'expDate';
    const result = await store.dispatch(changeSortParamAndUpdate(mockParam));

    expect(result.type).toBe('product/changeSortParamAndUpdate/fulfilled');

    const updatedState = store.getState().product;

    expect(updatedState.sortParam).toBe(mockParam);
    expect(updatedState.products).toEqual(products);
  });

  it('Should changeOrderParamAndUpdate async action case', async () => {
    const mockOrder = 'desc';
    const result = await store.dispatch(changeOrderParamAndUpdate(mockOrder));

    expect(result.type).toBe('product/changeOrderParamAndUpdate/fulfilled');

    const updatedState = store.getState().product;

    expect(updatedState.orderParam).toBe(mockOrder);
    expect(updatedState.products).toEqual(products);
  });

  it('Should postProduct async action', async () => {
    const mockProduct = products[0];
    const result = await store.dispatch(postProduct(mockProduct));

    expect(result.type).toBe('product/postProduct/fulfilled');

    const updatedState = store.getState().product;

    expect(updatedState.loadingProducts).toBeFalsy();
  });

  it('Should postProduct reject async action case', async () => {
    server.resetHandlers(
      rest.post(`${BASE_URL}/products`, (req, res, ctx) => res(ctx.status(500))),
    );
    const mockProduct = products[0];
    const result = await store.dispatch(postProduct(mockProduct));

    expect(result.type).toBe('product/postProduct/rejected');

    const updatedState = store.getState().product;

    expect(updatedState.loadingProducts).toBeFalsy();
  });

  it('Should updateProduct async action', async () => {
    const result = await store.dispatch(updateProduct(products[0]));

    expect(result.type).toBe('product/updateProduct/fulfilled');

    const updatedState = store.getState().product;

    expect(updatedState.loadingProducts).toBeFalsy();
  });

  it('Should updateProduct reject async action case', async () => {
    server.resetHandlers(
      rest.put(`${BASE_URL}/products/:id`, (req, res, ctx) => res(ctx.status(500))),
    );
    const result = await store.dispatch(updateProduct(products[0]));

    expect(result.type).toBe('product/updateProduct/rejected');

    const updatedState = store.getState().product;

    expect(updatedState.loadingProducts).toBeFalsy();
  });

  it('Should deleteProduct async action', async () => {
    const result = await store.dispatch(deleteProduct(0));

    expect(result.type).toBe('product/deleteProduct/fulfilled');

    const updatedState = store.getState().product;

    expect(updatedState.loadingProducts).toBeFalsy();
  });

  it('Should deleteProduct reject async action case', async () => {
    server.resetHandlers(
      rest.delete(`${BASE_URL}/products/:id`, (req, res, ctx) => res(ctx.status(500))),
    );
    const result = await store.dispatch(deleteProduct(0));

    expect(result.type).toBe('product/deleteProduct/rejected');

    const updatedState = store.getState().product;

    expect(updatedState.loadingProducts).toBeFalsy();
  });
});
