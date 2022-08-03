import React from 'react';
// import { useForm } from 'react-hook-form';
import {
  FormContainer,
  InputContainer,
  ProductInput,
  ProductLabel,
  ProductRadio,
  RadioGroup,
} from './productForm.style';

export default function ProductForm() {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();
  return (
    <FormContainer>
      <InputContainer>
        <ProductLabel>
          Name
          <ProductInput />
        </ProductLabel>
        <ProductLabel>
          Price
          <ProductInput />
        </ProductLabel>
        <div>
          <p>Perishable</p>
          <RadioGroup>
            <ProductLabel radio>
              Yes
              <ProductRadio />
            </ProductLabel>
            <ProductLabel radio>
              No
              <ProductRadio />
            </ProductLabel>
          </RadioGroup>
        </div>
        <ProductLabel>
          Fabrication Date
          <ProductInput />
        </ProductLabel>
        <ProductLabel>
          Expire Date
          <ProductInput />
        </ProductLabel>
        <ProductLabel>
          Price
          <ProductInput />
        </ProductLabel>
      </InputContainer>
      <button type="submit">Save</button>
    </FormContainer>
  );
}
