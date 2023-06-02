import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
`;

export const Figure = styled.figure`
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: calc(100vh - 100px);
  object-fit: cover;
`;

export const Article = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const H4 = styled.h4`
  font-size: 4.8rem;
  color: #ededed;
  text-align: center;
  margin-bottom: 55px;
  text-transform: uppercase;

  @media (max-width: 749px) {
    font-size: 3.8rem;
    margin-bottom: 75px;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const P = styled.p`
  font-size: 2.4rem;
  color: #ededed;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
