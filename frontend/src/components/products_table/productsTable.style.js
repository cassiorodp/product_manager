import styled from 'styled-components';

export const Table = styled.table`
  font-size: 1.6rem;
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  td,
  th {
    border-left: 1px solid ${(props) => props.theme.colors.background1Darker};
    border-right: 1px solid ${(props) => props.theme.colors.background1Darker};
    text-align: center;
    padding: 8px;
  }

  th {
    background-color: ${(props) => props.theme.colors.colorPrimary};
  }

  tr:nth-child(even) {
    background-color: ${(props) => props.theme.colors.pureWhite};
  }
  td {
    width: 15%;
  }
`;

export const ButtonCell = styled.td`
  display: flex;
  justify-content: space-around;
  && {
    width: 100%;
    border-left: 0px;
  }
`;

export const ActionButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.edit
    ? props.theme.colors.colorAtention
    : props.theme.colors.colorError)};
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: all 0.8s;
  :hover {
    cursor: pointer;
    filter: brightness(50%);
  }
`;
