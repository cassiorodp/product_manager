import styled from 'styled-components';

export const SelectLabel = styled.label`
  display: flex;
  margin-left: 1.5rem;
  align-items: center;
  font-size: 1.6rem;
`;

export const Select = styled.select`
  border: none;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  padding: 1rem 2rem;
  width: 50%;
  font-size: 1.6rem;
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.colorPrimary};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .8s;
  width: 11rem;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.colorPrimaryDark};
  }
`;
