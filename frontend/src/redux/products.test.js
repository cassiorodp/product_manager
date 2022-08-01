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
  const state = store.getState().product;
  it('Should return the initial values', () => {
    expect(state).toEqual(initialState);
  });

  it('Should change page', () => {
    const mockCounter = 1;

    const updatedState = productReducer(state, changePage(mockCounter));

    expect(updatedState.page).toBe(mockCounter + 1);
  });

  it('Should change FormState', () => {
    const mockState = true;

    const updatedState = productReducer(state, changeFormState(mockState));

    expect(updatedState.formState).toBe(mockState);
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

    const updatedState = productReducer(state, changeOrderParam(mockOrderParam));

    expect(updatedState.orderParam).toBe(mockOrderParam);
  });
});
