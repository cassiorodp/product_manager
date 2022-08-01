import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { changePageAndUpdate } from '../../redux/async_actions/productActions';
import { selectProduct } from '../../redux/slices/productSlice';
import { ButtonGroup, PaginateButton } from './paginateButtons.style';

export default function PaginateButtons() {
  const dispatch = useDispatch();
  const { lastPage, page } = useSelector(selectProduct);
  return (
    <ButtonGroup>
      <PaginateButton
        disabled={page <= 1}
        onClick={() => dispatch(changePageAndUpdate(-1))}
      >
        <AiOutlineArrowLeft />
        Previous
      </PaginateButton>
      <PaginateButton
        disabled={page === lastPage}
        onClick={() => dispatch(changePageAndUpdate(1))}
      >
        Next
        <AiOutlineArrowRight />
      </PaginateButton>
    </ButtonGroup>
  );
}
