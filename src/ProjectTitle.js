import React from 'react';
import styled from 'styled-components';

const StyledProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = ({ children }) => {
  return <StyledProjectTitle>{children}</StyledProjectTitle>;
};

export default ProjectTitle;
