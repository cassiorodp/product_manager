import styled from 'styled-components';

export const ConfigurationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SelectLabel = styled.label`
  display: flex;
  margin-left: 1.5rem;
  align-items: center;
  font-size: 1.6rem;
  width: 30%;
`;

export const Select = styled.select`
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  width: 80%;
  font-size: 1.6rem;
  max-width: 20rem;
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.colorPrimary};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all .8s;
  width: 10%;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.colorPrimaryDark};
  }
`;
