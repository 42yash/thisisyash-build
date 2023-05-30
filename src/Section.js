import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Add this line */
  background-color: ${({ isDark }) => (isDark ? '#f8f8f8' : '#ececec')};
  color: ${({ isDark }) => (isDark ? '#333' : '#777')};
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
`;

const Section = ({ children, isDark }) => {
  return <StyledSection isDark={isDark}>{children}</StyledSection>;
};

export default Section;
