import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 25vh;
  padding: 25px 35px;
  position: relative;

  @media (max-width: 345px) {
    padding: 25px 15px;
  }
`;
