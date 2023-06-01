import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  padding: 15px 25px;
  background-color: rgb(218, 0, 55);
  box-shadow: rgb(218, 0, 55) 0px 0px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100px;
`;

export const Nav = styled.nav`
  width: 45%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Li = styled.li`
  font-size: 1.7rem;
  color: #ededed;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`;

export const NavMobile = styled.nav`
  /* position: relative; */
  width: 45%;
  display: none;

  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Lines = styled.div`
  right: 45px;

  cursor: pointer;
`;

export const Line = styled.div`
  width: 45px;
  padding: 2px;
  background-color: #2b2b2b;
  margin-top: 5px;

  &.line-disabled {
    opacity: 0;
  }

  &.line-active-1 {
    position: absolute;
    transform: rotate(45deg);
    transform-origin: center;
    top: 49%;
  }

  &.line-active-2 {
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: center;
    top: 49%;
  }
`;

export const UlMobile = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 35px 15px;
  list-style: none;
  background-color: rgb(218, 0, 55);
  box-shadow: rgb(218, 0, 55) 0px 0px 10px;
  transform: translateX(110%);
  transition: all 200ms ease-in;

  display: flex;
  flex-direction: column;
  gap: 25px;

  &.active {
    transform: translateX(0%);
  }
`;
