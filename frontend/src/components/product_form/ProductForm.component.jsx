import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../redux/slices/productSlice';
import {
  ErrorFeedBack,
  FormContainer,
  InputContainer,
  ProductInput,
  ProductLabel,
  ProductRadio,
  RadioGroup,
} from './productForm.style';
import mixins from '../../mixins';
import {
  postProduct,
  updateProduct,
} from '../../redux/async_actions/productActions';

const { getFormatedDate, compareDates, formatToISOString } = mixins;

export default function ProductForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const initiaValues = {
    name: '',
    fabDate: '',
    expDate: '',
    price: 0,
    perishable: false,
  };

  const {
    products, selectedProductId, formState, userAction,
  } = useSelector(selectProduct);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(initiaValues);
  const onSubmit = (data) => {
    const submitData = { ...data };
    submitData.perishable = JSON.parse(selectedProduct.perishable);
    submitData.fabDate = formatToISOString(data.fabDate);
    if (data.expDate) {
      submitData.expDate = formatToISOString(data.expDate);
    }
    if (!submitData.perishable) {
      submitData.expDate = '';
    }
    if (userAction === 'add') {
      dispatch(postProduct(submitData));
    } else {
      dispatch(updateProduct(submitData));
    }
  };

  useEffect(() => {
    if (selectedProductId) {
      const foundProduct = products.find(({ id }) => id === selectedProductId);
      const formatedProduct = { ...foundProduct };
      formatedProduct.fabDate = getFormatedDate(foundProduct.fabDate);
      formatedProduct.expDate = getFormatedDate(foundProduct.expDate);
      setSelectedProduct(formatedProduct);
      reset(formatedProduct);
    } else {
      setSelectedProduct(initiaValues);
      reset(initiaValues);
    }
  }, [selectedProductId]);

  const updateSelectedProduct = (field, value) => {
    if (field === 'perishable') {
      setSelectedProduct({ ...selectedProduct, [field]: JSON.parse(value) });
    } else {
      setSelectedProduct({ ...selectedProduct, [field]: value });
    }
  };
  return (
    <div>
      {formState && (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <ProductLabel>
              Name
              <ProductInput
                {...register('name', { required: 'name is required' })}
                name="name"
                onChange={(e) => updateSelectedProduct(e.target.name, e.target.value)}
              />
            </ProductLabel>
            <ErrorFeedBack>
              {errors.name?.message || <span>&nbsp;</span>}
            </ErrorFeedBack>
            <ProductLabel>
              Price
              <ProductInput
                {...register('price', {
                  required: 'price is required',
                  valueAsNumber: true,
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: 'type only numbers',
                  },
                })}
                placeholder="00.00"
                name="price"
                onChange={(e) => updateSelectedProduct(e.target.name, e.target.value)}
              />
              <ErrorFeedBack>
                {errors.price?.message || <span>&nbsp;</span>}
              </ErrorFeedBack>
            </ProductLabel>
            <div>
              <p>Perishable</p>
              <RadioGroup>
                <ProductLabel radio>
                  Yes
                  <ProductRadio
                    name="perishable"
                    {...register('perishable')}
                    onClick={(e) => updateSelectedProduct(e.target.name, e.target.value)}
                    value
                    checked={selectedProduct.perishable}
                  />
                </ProductLabel>
                <ProductLabel radio>
                  No
                  <ProductRadio
                    name="perishable"
                    value={false}
                    onClick={(e) => updateSelectedProduct(e.target.name, e.target.value)}
                    {...register('perishable')}
                    checked={!selectedProduct.perishable}
                  />
                </ProductLabel>
              </RadioGroup>
            </div>
            <ProductLabel>
              Fabrication Date
              <ProductInput
                {...register('fabDate', {
                  required: 'Fabrication date is required',
                  pattern: {
                    value:
                      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
                    message: 'invalid date format',
                  },
                })}
                placeholder="dd/mm/yyyy"
                name="fabDate"
                onChange={(e) => updateSelectedProduct(e.target.name, e.target.value)}
              />
            </ProductLabel>
            <ErrorFeedBack>
              {errors.fabDate?.message || <span>&nbsp;</span>}
            </ErrorFeedBack>
            {selectedProduct.perishable && (
              <ProductLabel>
                Expire Date
                <ProductInput
                  {...register('expDate', {
                    required: 'Expire date is required',
                    pattern: {
                      value:
                        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
                      message: 'invalid date format',
                    },
                    validate: {
                      validExpDate: (v) => compareDates(v, selectedProduct.fabDate)
                        || 'Expire Date must be bigger than Fabrication Date',
                    },
                  })}
                  placeholder="dd/mm/yyyy"
                  name="expDate"
                  onChange={(e) => updateSelectedProduct(e.target.name, e.target.value)}
                />
                <ErrorFeedBack>
                  {errors.expDate?.message || <span>&nbsp;</span>}
                </ErrorFeedBack>
              </ProductLabel>
            )}
          </InputContainer>
          <button type="submit">
            {userAction === 'add' ? 'Save Product' : 'Update Product'}
          </button>
        </FormContainer>
      )}
    </div>
  );
}
