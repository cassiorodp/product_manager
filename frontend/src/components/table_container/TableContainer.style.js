import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
`;

export default Container;
