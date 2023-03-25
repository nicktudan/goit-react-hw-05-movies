import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackLinkHref = styled(Link)`
  padding: 12px 32px;
  margin-left: 20px;
  border-radius: 2px;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  color: #3f51b5;
  background-color: #ffffff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    color: #fff;
    background-color: #303f9f;
  }
`;

export const AboutTitle = styled.h3`
  padding: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

export const AboutList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const AboutLink = styled(NavLink)`
  padding: 8px 16px;
  margin: 0 20px;
  /* min-width: 140px;
  max-width: 100px; */
  border-radius: 2px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
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
