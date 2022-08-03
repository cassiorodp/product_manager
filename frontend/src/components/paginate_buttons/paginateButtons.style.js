import styled from 'styled-components';

export const PaginateButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.colorSecondary};
  padding: 1rem;
  display: flex;
  font-size: 1.6rem;
  width: 16rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all .8s;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.colorSecondaryDark};
  }
  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.background1Dark};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
