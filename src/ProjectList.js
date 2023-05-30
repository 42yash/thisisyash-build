import React from 'react';
import styled from 'styled-components';

const StyledProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  max-width: 600px;
  justify-content: center;
  margin: 0 auto;
`;

const ProjectList = ({ children }) => {
  return <StyledProjectList>{children}</StyledProjectList>;
};

export default ProjectList;
