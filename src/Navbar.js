import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const NavLink = styled(Link)`
  margin-right: 1rem;
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ccc;
  }
`;

const CollapseButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ sections }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledNavbar>
      <CollapseButton onClick={handleCollapseToggle}>
  {isCollapsed ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
</CollapseButton>

      {!isCollapsed && (
        <div>
          {sections.map(({ id, title }) => (
            <NavLink key={id} to={id} smooth duration={500} onClick={handleCollapseToggle}>
              {title}
            </NavLink>
          ))}
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
