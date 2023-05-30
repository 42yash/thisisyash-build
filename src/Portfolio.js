import React from 'react';
import Container from './Container';
import Section from './Section';
import Title from './Title';
import Description from './Description';
import ProjectList from './ProjectList';
import ProjectItem from './ProjectItem';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import Navbar from './Navbar';

const sections = [
  { id: 'home', title: "Welcome to Yash's Portfolio", isDark: false },
  { id: 'about', title: 'About Me', isDark: true },
  { id: 'projects', title: 'Projects', isDark: false },
  { id: 'contact', title: 'Contact Me', isDark: true },
];

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    technologies: ['Vue', 'HTML', 'SCSS'],
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3.',
    technologies: ['Angular', 'TypeScript', 'Bootstrap'],
  },
];

const Portfolio = () => {
  return (
    <Container>
      <Navbar sections={sections} />
      {sections.map(({ id, title, isDark }) => (
        <Section key={id} id={id} isDark={isDark}>
          <div>
            <Title>{title}</Title>
            {id === 'about' && (
              <Description>
                Hi, I'm Yash, a passionate developer with a love for creating amazing
                web applications. I specialize in front-end development using React.js.
                I have experience working with various technologies including HTML, CSS,
                and JavaScript.
              </Description>
            )}
            {id === 'projects' && (
              <div>
                <ProjectList>
                  {projects.map(({ title, description, technologies }, index) => (
                    <ProjectItem key={index}>
                      <ProjectTitle>{title}</ProjectTitle>
                      <ProjectDescription>{description}</ProjectDescription>
                      <p>Technologies used: {technologies.join(', ')}</p>
                    </ProjectItem>
                  ))}
                </ProjectList>
              </div>
            )}
          </div>
        </Section>
      ))}
    </Container>
  );
};

export default Portfolio;
