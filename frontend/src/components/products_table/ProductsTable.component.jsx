import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import mixins from '../../mixins';

const { getFormatedDate } = mixins;

export default function ProductsTable({ products }) {
  return (
    <table>
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
              <td>{product.price}</td>
              <td />
            </tr>
          ))}
      </tbody>
    </table>
  );
}
