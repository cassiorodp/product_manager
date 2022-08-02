import styled from 'styled-components';

export const DialogContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 40vh;
  h1 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const DialogButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const DialogButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.confirmation
    ? props.theme.colors.colorPrimary
    : props.theme.colors.colorError)};
  padding: 1rem;
  display: flex;
  font-size: 1.6rem;
  width: 16rem;
  align-items: center;
  justify-content: center;
  transition: all .8s;
  :hover {
    cursor: pointer;
    filter: brightness(50%);
  }
`;
