import React from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import {
  DialogButton,
  DialogButtonGroup,
  DialogContainer,
} from './confirmationModal.style';
import { selectProduct } from '../../redux/slices/productSlice';
import { deleteProduct } from '../../redux/async_actions/productActions';

export default function ConfirmationModal({ open, onClose }) {
  const { selectedProduct } = useSelector(selectProduct);
  const dispatch = useDispatch();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContainer>
        <h1>Do you want to delete this product?</h1>
        <p>This action is irreversible</p>
        <DialogButtonGroup>
          <DialogButton onClick={onClose} negation>
            No
          </DialogButton>
          <DialogButton
            onClick={() => {
              dispatch(deleteProduct(selectedProduct));
              onClose();
            }}
            confirmation
          >
            Yes
          </DialogButton>
        </DialogButtonGroup>
      </DialogContainer>
    </Dialog>
  );
}
