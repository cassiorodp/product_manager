import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-flow: column wrap;
  /* align-items: center; */
  background-color: #c2c2c2c2;
  border-radius: 8px;
  margin: 1rem 0;
  padding: 25px;
  width: 45%;
  min-width: 80rem;
  height: 36rem;
  font-size: 1.6rem;

  button {
    border: none;
    background-color: ${(props) => props.theme.colors.colorPrimary};
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: inherit;
    transition: all 0.5s;
    max-width: 10rem;
    align-self: center;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.colorPrimaryDark};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 80%;
`;

export const ProductLabel = styled.label`
  margin-top: 1rem;
  display: flex;
  flex-direction: ${(props) => (props.radio ? 'row' : 'column')};
  align-items: ${(props) => (props.radio ? 'center' : 'flex-start')};
  justify-content: flex-start;
`;

export const ProductInput = styled.input`
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  padding: 1.5rem 2rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
`;

export const ProductRadio = styled.input.attrs({ type: 'radio' })``;
