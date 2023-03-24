import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 28px;
`;

export const MovieItem = styled.li`
  flex-basis: 24%;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const LinkMovieItem = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const MovieItemImage = styled.img`
  object-fit: cover;
`;

export const MovieItemTitle = styled.h3`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-size: 24px;

  :hover,
  :focus {
    color: #303f9f;
  }
`;
