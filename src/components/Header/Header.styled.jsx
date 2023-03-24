import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const StyledHeader = styled.header`
  display: flex;
  padding: 16px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid #3f51b5;

  > nav {
    display: flex;
    margin: 0 auto;
  }
`;

export const LinkNav = styled(NavLink)`
  margin: 0 40px;
  padding: 8px 16px;
  min-width: 140px;
  max-width: 100px;
  border-radius: 2px;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  color: #000;
  background-color: #3f51b5;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    color: #fff;
    background-color: #303f9f;
  }

  &.active {
    color: #303f9f;
    background-color: #fff;
  }
`;
