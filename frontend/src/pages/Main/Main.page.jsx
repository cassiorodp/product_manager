import React from 'react';
import { Navigate } from 'react-router-dom';
import TableContainer from '../../components/table_container/TableContainer.component';

export default function Main() {
  const accessToken = localStorage.getItem('accessToken');
  return (
    <>
      {!accessToken && <Navigate to="/" />}
      <TableContainer />
    </>
  );
}
