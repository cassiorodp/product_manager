import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #c2c2c2c2;
  border-radius: 8px;
  box-shadow: #00000059 0 5px 15px;
  height: 100%;
  margin-top: 10px;
  min-height: 200px;
  min-width: 200px;
  padding: 25px;
  width: 100%;

  button {
    border: none;
    background-color: ${(props) => props.theme.colors.colorPrimary};
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: inherit;
    transition: all 0.5s;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.colorPrimaryDark};
  }
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const LoginInput = styled.input`
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  padding: 1.5rem 2rem;
`;

export const ErrorFeedBack = styled.p`
  color: ${(props) => props.theme.colors.colorError};
`;
