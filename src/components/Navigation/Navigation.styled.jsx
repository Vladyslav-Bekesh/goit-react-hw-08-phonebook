import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavLinkCss = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #fff;

  &:active {
    color: #ffa500;
  }
`;
