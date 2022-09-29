import React from 'react';
import Skill from './Skill';
import { Container, Divider, Flex, Heading } from '@chakra-ui/react';

function Skills() {
  const skills = [
    {
      name: 'JavaScript',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    },
    {
      name: 'NodeJS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'React',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'NPM',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    },
    {
      name: 'HTML5',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
    },
    {
      name: 'CSS3',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
    },
    {
      name: 'C',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg',
    },
    {
      name: 'Python',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'MongoDB',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'SQLite',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    },
    {
      name: 'Bootstrap',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Bulma CSS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg',
    },
    {
      name: 'Sass',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
      name: 'Git',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'Firebase',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    },
    {
      name: 'Webpack',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg',
    },
    {
      name: 'Jest',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    },
    {
      name: 'VSCode',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
      name: 'Linux',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    },
  ];

  return (
    <Container
      id={'skills'}
      maxW="7xl"
      p={{ base: 5, md: 10 }}
      mx="auto"
      marginTop={10}
    >
      <Heading
        margin={10}
        fontFamily={'font1'}
        fontWeight={400}
        fontSize={'xxx-large'}
        marginBottom={0}
      >
        Skills / Tools
      </Heading>

      <Flex gap={5} marginTop={5} flexWrap={'wrap'}>
        {skills.map(skill => {
          return <Skill skill={skill} />;
        })}
      </Flex>
    </Container>
  );
}

export default Skills;
