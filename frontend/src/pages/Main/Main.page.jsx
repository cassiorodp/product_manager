import React from 'react';
import { Navigate } from 'react-router-dom';
import TableContainer from '../../components/table_container/TableContainer.component';
import { Heading, MainContainer } from './main.styles';

export default function Main() {
  const accessToken = localStorage.getItem('accessToken');
  return (
    <MainContainer>
      <Heading>Products</Heading>
      {!accessToken && <Navigate to="/" />}
      <TableContainer />
    </MainContainer>
  );
}
