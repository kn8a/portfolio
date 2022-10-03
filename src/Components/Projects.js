import { Flex, Heading, Grid, Container, Box, Button } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const drawerBreakpoint = 5;

  const projects = [
    {
      name: 'Sweetnook',
      description: 'Social media app inspired by Facebook',
      stack: 'NodeJS, MongoDb, React',
      image:
        'https://user-images.githubusercontent.com/88045655/189862036-d063460a-ced4-4c91-8dba-299cc9a17a82.gif',
      repo: 'https://github.com/kn8a/sweetnook',
      demo: 'https://kn8a.github.io/sweetnook/',
    },
    {
      name: 'Shopping Cart',
      description: 'Shopping cart frontend',
      stack: 'React',
      image:
        'https://user-images.githubusercontent.com/88045655/169199931-1d8ff400-08e6-4477-8e7d-d89ddc3c4caf.JPG',
      repo: 'https://github.com/kn8a/shopping-cart',
      demo: 'https://kn8a.github.io/shopping-cart/',
    },
    {
      name: 'Find the Country',
      description: `"Where's Waldo" style game`,
      stack: 'React, Firebase',
      image:
        'https://user-images.githubusercontent.com/88045655/172295420-53bdab44-69cc-446d-b2ad-c814b584dcdf.JPG',
      repo: 'https://github.com/kn8a/find-the-country',
      demo: 'https://kn8a.github.io/find-the-country/',
    },
    {
      name: 'Rock-Paper-Scissors',
      description: 'Classic Rock-Paper-Scissors game',
      stack: 'JavaScript, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192947366-387b4025-6d02-4b3e-8280-adf1cb917c3c.JPG',
      repo: 'https://github.com/kn8a/rock-paper-scissors',
      demo: 'https://kn8a.github.io/rock-paper-scissors/',
    },

    {
      name: 'CV Builder App',
      description: 'Resume design app',
      stack: 'React',
      image:
        'https://user-images.githubusercontent.com/88045655/192800810-c604ad1f-2c1e-475f-a0f9-683fcdc1be25.JPG',
      repo: 'https://github.com/kn8a/cv-project',
      demo: 'https://kn8a.github.io/cv-project/',
    },
    {
      name: 'Goals',
      description: 'Simple app for goal setting',
      stack: 'NodeJS, MongoDb, React',
      image:
        'https://user-images.githubusercontent.com/88045655/192803899-10f0996a-6b93-42af-8c13-8caa735e371f.JPG',
      repo: 'https://github.com/kn8a/goals',
      demo: 'https://kn8a-goals.herokuapp.com/',
    },
    {
      name: 'Admin dashboard',
      description: 'Mockup dashboard (CSS Grid practice)',
      stack: 'HTML, CSS (Grid)',
      image:
        'https://user-images.githubusercontent.com/88045655/192804753-bdb98acf-6cc5-4ff8-886e-1abf7e668fdd.JPG',
      repo: 'https://github.com/kn8a/admin-dashboard',
      demo: 'https://kn8a.github.io/admin-dashboard/',
    },
    {
      name: 'Library app',
      description: 'Book tracking app',
      stack: 'JavaScript, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192807418-24af2046-528b-475c-9349-6cbc2c8de34f.JPG',
      repo: 'https://github.com/kn8a/library',
      demo: 'https://kn8a.github.io/library/',
    },
    {
      name: 'Weather app',
      description: 'Fetching weather data from API',
      stack: 'JavaScript, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192946136-043ee1d3-2043-4c51-bb95-4275999ada1c.JPG',
      repo: 'https://github.com/kn8a/weather-app',
      demo: 'https://kn8a.github.io/weather-app/',
    },
    {
      name: 'Sign-up form',
      description: 'A mockup sign-up form using Flex.',
      stack: 'HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192946807-22c465f1-9076-4558-8680-7e77b3421967.JPG',
      repo: 'https://github.com/kn8a/sign-up-form',
      demo: 'https://kn8a.github.io/sign-up-form/',
    },
    {
      name: 'To-do',
      description: 'Simple to-do app',
      stack: 'JavaScript, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192801674-fc887e90-51a6-4585-8e28-eee88f841d14.JPG',
      repo: 'https://github.com/kn8a/todo',
      demo: 'https://kn8a.github.io/todo-test/',
    },
    {
      name: 'Calculator',
      description: 'A JavaScript calculator',
      stack: 'JavaScript, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192948904-1064a4d3-8302-4661-a819-f44736a600f4.JPG',
      repo: 'https://github.com/kn8a/odin-calculator',
      demo: 'https://kn8a.github.io/odin-calculator/',
    },
    {
      name: 'Tic-Tac-Toe',
      description: 'Minimal Tic-Tac-Toe game',
      stack: 'JavaScript, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192949539-aaeef423-3a59-43eb-829f-ef98ed79dbe5.JPG',
      repo: 'https://github.com/kn8a/tic-tac-toe',
      demo: 'https://kn8a.github.io/tic-tac-toe/',
    },
    {
      name: 'Restaurant app',
      description: 'Restaurant site built entirely in JavaScript, CSS',
      stack: 'JavaScript, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/155962189-808e06ee-be1f-4e00-bdd1-b49574f28c80.JPG',
      repo: 'https://github.com/kn8a/restaurant',
      demo: 'https://kn8a.github.io/restaurant/',
    },
    {
      name: 'Landing page',
      description: 'Mockup landing page',
      stack: 'HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192951665-cd62a431-aa6c-4cac-bb4a-e37d9291d461.JPG',
      repo: 'https://github.com/kn8a/landing-page',
      demo: 'https://kn8a.github.io/landing-page/',
    },
  ];

  return (
    <>
      <Container
        maxW="7xl"
        p={{ base: 5, md: 10 }}
        mx="auto"
        id="projects"
        marginTop={10}
      >
        <Heading
          margin={10}
          marginBottom={0}
          fontFamily={'font1'}
          fontWeight={400}
          fontSize={'xx-large'}
        >
          Projects
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(320px, 1fr))">
          {projects.slice(0, drawerBreakpoint).map(project => {
            return (
              <Box>
                <ProjectCard project={project} />
              </Box>
            );
          })}
          <Flex grow={1} alignItems={'center'} justifyContent={'center'}>
            <Button
              size={'lg'}
              variant={'solid'}
              shadow={'md'}
              ref={btnRef}
              onClick={onOpen}
            >
              See more projects
            </Button>
          </Flex>
        </Grid>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: 'sm', md: 'md' }}
      >
        <DrawerOverlay w={'100vw'} />
        <DrawerContent>
          <DrawerCloseButton size={'lg'} />
          <DrawerHeader>More projects</DrawerHeader>
          <DrawerBody>
            {projects.slice(drawerBreakpoint).map(project => {
              return (
                <Box>
                  <ProjectCard project={project} />
                </Box>
              );
            })}
          </DrawerBody>
          <DrawerFooter alignContent={'center'}>
            <Button variant="outline" mx={'auto'} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Projects;
