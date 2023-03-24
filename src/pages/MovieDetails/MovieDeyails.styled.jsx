import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackLinkHref = styled(Link)`
  color: #ffffff;
  background-color: #3f3f40;
  padding: 8px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 8px;
  cursor: pointer;

  :hover,
  :focus {
    color: #000000;
    background-color: red;
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
  padding: 8px;
  margin: 0 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  cursor: pointer;

  :hover,
  :focus {
    color: #000000;
    background-color: red;
  }
`;
