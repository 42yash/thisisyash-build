import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledNavLink = styled(Link)`
  margin-right: 1rem;
  cursor: pointer;
`;

const NavLink = ({ to, smooth, duration, children }) => {
  return (
    <StyledNavLink to={to} smooth={smooth} duration={duration}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
