import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductForm from '../../components/product_form/ProductForm.component';
import TableContainer from '../../components/table_container/TableContainer.component';
import { Heading, MainContainer } from './main.styles';

export default function Main() {
  const accessToken = localStorage.getItem('accessToken');
  return (
    <MainContainer>
      {!accessToken && <Navigate to="/" />}
      <Heading>Products</Heading>
      <ProductForm />
      <TableContainer />
    </MainContainer>
  );
}
