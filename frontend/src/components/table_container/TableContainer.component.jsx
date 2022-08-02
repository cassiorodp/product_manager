import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPerPage } from '../../redux/async_actions/productActions';
import { selectProduct } from '../../redux/slices/productSlice';
import ConfigurationButtons from '../configuration_buttons/ConfigurationButtons.component';
import PaginateButtons from '../paginate_buttons/PaginateButtons.component';
import ProductsTable from '../products_table/ProductsTable.component';
import Container from './TableContainer.style';

export default function TableContainer() {
  const {
    page, sortParam, orderParam, products,
  } = useSelector(selectProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsPerPage({ page, sortParam, orderParam }));
  }, []);

  return (
    <Container>
      <ConfigurationButtons />
      <ProductsTable products={products} />
      <PaginateButtons />
    </Container>
  );
}
