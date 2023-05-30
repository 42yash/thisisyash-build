import React from 'react';
import styled from 'styled-components';

const StyledProjectItem = styled.li`
  margin-bottom: 2rem;
  flex: 0 0 calc(33.33% - 2rem);
  padding: 1rem;
  box-sizing: border-box;
`;

const ProjectItem = ({ children }) => {
  return <StyledProjectItem>{children}</StyledProjectItem>;
};

export default ProjectItem;
