import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { BsFillTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import mixins from '../../mixins';
import { ActionButton, ButtonCell, Table } from './productsTable.style';

const { getFormatedDate, getFormatedCurrency } = mixins;

export default function ProductsTable({ products }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Fabrication Date</th>
          <th>Perishable</th>
          <th>Expire Date</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0
          && products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{getFormatedDate(product.fabDate)}</td>
              <td>{product.perishable ? <FiCheck /> : <FiX />}</td>
              <td>{getFormatedDate(product.expDate)}</td>
              <td>{`R$ ${getFormatedCurrency(product.price)}`}</td>
              <ButtonCell>
                <ActionButton edit><BiEdit /></ActionButton>
                <ActionButton delete><BsFillTrashFill /></ActionButton>
              </ButtonCell>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
