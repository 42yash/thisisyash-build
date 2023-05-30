import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
