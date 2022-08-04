import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import { changeOrderParamAndUpdate, changeSortParamAndUpdate } from '../../redux/async_actions/productActions';
import { changeFormState, selectProduct } from '../../redux/slices/productSlice';
import {
  SelectLabel, Select, AddButton, ConfigurationContainer,
} from './configurationButton.style';

export default function ConfigurationButtons() {
  const { sortParam, orderParam } = useSelector(selectProduct);
  const dispatch = useDispatch();
  return (
    <ConfigurationContainer>
      <SelectLabel htmlFor="sortParams">
        Sort By:
        <Select
          defaultValue={sortParam}
          onChange={(e) => dispatch(changeSortParamAndUpdate(e.target.value))}
          name="sortParams"
          id="sortParams"
        >
          <option value="name">Name</option>
          <option value="fabDate">Fabrication Date</option>
          <option value="expDate">Expiration Date</option>
          <option value="perishable">Perishable</option>
          <option value="price">Price</option>
        </Select>
      </SelectLabel>
      <SelectLabel htmlFor="orderParms">
        Order by:
        <Select
          defaultValue={orderParam}
          onChange={(e) => dispatch(changeOrderParamAndUpdate(e.target.value))}
          name="orderParms"
          id="orderParms"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </SelectLabel>
      <AddButton onClick={() => dispatch(changeFormState({ type: 'add', id: '' }))}>
        <MdAdd size="2rem" />
        Add Product
      </AddButton>
    </ConfigurationContainer>
  );
}
