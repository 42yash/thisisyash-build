import React from 'react';
import styled from 'styled-components';

const StyledProjectDescription = styled.p`
  font-size: 1.2rem;
`;

const ProjectDescription = ({ children }) => {
  return <StyledProjectDescription>{children}</StyledProjectDescription>;
};

export default ProjectDescription;
