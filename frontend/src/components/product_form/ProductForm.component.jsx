import React from 'react';
import {
  FormContainer, ProductInput, ProductLabel, ProductRadio, RadioGroup,
} from './productForm.style';

export default function ProductForm() {
  return (
    <FormContainer>
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
    </FormContainer>
  );
}
