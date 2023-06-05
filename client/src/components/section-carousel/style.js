import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  padding: 15px 0px;
`;

export const H2 = styled.h2`
  font-size: 4.5rem;
  color: #ededed;
  text-transform: uppercase;

  @media (max-width: 345px) {
    font-size: 3.5rem;
    text-align: center;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 45px;

  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #ededed;
  width: 45px;
  height: 45px;
  position: absolute;
  cursor: pointer;

  svg {
    font-size: 45px;
  }
`;

export const ButtonLeft = styled(Button)`
  left: 0;
`;

export const ButtonRight = styled(Button)`
  right: 0;
`;
