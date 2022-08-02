import React, { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { BsFillTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import mixins from '../../mixins';
import { ActionButton, ButtonCell, Table } from './productsTable.style';
import { changeFormState } from '../../redux/slices/productSlice';
import ConfirmationModal from '../confirmation_modal/ConfirmationModal.component';

const { getFormatedDate, getFormatedCurrency } = mixins;

export default function ProductsTable({ products }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
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
              <td>
                {product.perishable ? (
                  <FiCheck size="2rem" />
                ) : (
                  <FiX size="2rem" />
                )}
              </td>
              <td>{getFormatedDate(product.expDate)}</td>
              <td>{`R$ ${getFormatedCurrency(product.price)}`}</td>
              <ButtonCell>
                <ActionButton
                  onClick={() => dispatch(changeFormState({ type: 'edit', id: product.id }))}
                  edit
                >
                  <BiEdit />
                </ActionButton>
                <ActionButton
                  onClick={() => {
                    dispatch(
                      changeFormState({ type: 'delete', id: product.id }),
                    );
                    setOpenModal(true);
                  }}
                  delete
                >
                  <BsFillTrashFill />
                </ActionButton>
              </ButtonCell>
            </tr>
          ))}
      </tbody>
      <ConfirmationModal open={openModal} onClose={() => setOpenModal(false)} />
    </Table>
  );
}
