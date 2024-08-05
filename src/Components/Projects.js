import { Flex, Heading, Grid, Container, Box, Button } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import { VscFileSubmodule } from 'react-icons/vsc';
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
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const drawerBreakpoint = 8;

  const projects = [
    {
      name: 'Food Manufacturer Site',
      description: 'Website for ficticious food manufacturer',
      stack: 'React, Chakra UI',
      image:
        'https://github.com/user-attachments/assets/f70fe81e-fb84-4234-a380-b055fb2ae41c',
      repo: 'https://github.com/kn8a/food-site',
      demo: 'https://kn8a.github.io/food-site/',
    },
    {
      name: 'React Payment Form',
      description: 'Reusable interactive payment form',
      stack: 'React, Chakra UI',
      image:
        'https://github.com/kn8a/react-payment-form/assets/88045655/faf1f885-683f-472a-8ba1-4107e3558dc8',
      repo: 'https://github.com/kn8a/react-cc-payment-form',
      demo: 'https://kn8a.github.io/react-cc-payment-form/',
    },
    {
      name: 'Product Prediction',
      description: 'Machine Learning product prediction',
      stack: 'Python, sklearn, pandas, matplotlib, easygui',
      image:
        'https://github.com/kn8a/ML-product-predict/blob/master/visuals/showcase.jpg?raw=true',
      repo: 'https://github.com/kn8a/ML-product-predict/tree/master',
      demo: '',
    },
    {
      name: 'KortGo',
      description: 'Sports venue booking system',
      stack: 'NodeJS, ExpresssJS, MongoDb, React',
      image:
        'https://user-images.githubusercontent.com/88045655/213618719-c7de00c0-a14b-488f-b3c1-6be4c6b4566b.png',
      repo: 'https://github.com/kn8a/kortgo',
      demo: 'https://kn8a.github.io/kortgo/',
    },
    {
      name: 'Sweetnook',
      description: 'Social media app inspired by Facebook',
      stack: 'NodeJS, ExpresssJS, MongoDb, React',
      image:
        'https://user-images.githubusercontent.com/88045655/189862036-d063460a-ced4-4c91-8dba-299cc9a17a82.gif',
      repo: 'https://github.com/kn8a/sweetnook',
      demo: 'https://kn8a.github.io/sweetnook/',
    },
    {
      name: 'Phonebook',
      description: 'Phonebook with CRUD functionality',
      stack: 'NodeJS, ExpresssJS, MongoDb, React',
      image:
        'https://user-images.githubusercontent.com/88045655/213617525-45bd9177-aee8-4c3b-851d-d16ef6f5fce7.JPG',
      repo: 'https://github.com/kn8a/phonebook-react',
      demo: 'https://kn8a.github.io/phonebook-react/',
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
    // {
    //   name: 'Find the Country',
    //   description: `"Where's Waldo" style game`,
    //   stack: 'React, Firebase',
    //   image:
    //     'https://user-images.githubusercontent.com/88045655/172295420-53bdab44-69cc-446d-b2ad-c814b584dcdf.JPG',
    //   repo: 'https://github.com/kn8a/find-the-country',
    //   demo: 'https://kn8a.github.io/find-the-country/',
    // },
    {
      name: 'Rock-Paper-Scissors',
      description: 'Classic Rock-Paper-Scissors game',
      stack: 'Vanilla JS, HTML, CSS',
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
      name: 'Weather app',
      description: 'Fetching weather data from API',
      stack: 'Vanilla JS, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192946136-043ee1d3-2043-4c51-bb95-4275999ada1c.JPG',
      repo: 'https://github.com/kn8a/weather-app',
      demo: 'https://kn8a.github.io/weather-app/',
    },
    {
      name: 'Calculator',
      description: 'A JavaScript calculator',
      stack: 'Vanilla JS, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192948904-1064a4d3-8302-4661-a819-f44736a600f4.JPG',
      repo: 'https://github.com/kn8a/odin-calculator',
      demo: 'https://kn8a.github.io/odin-calculator/',
    },

    {
      name: 'Library app',
      description: 'Book tracking app',
      stack: 'Vanilla JS, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192807418-24af2046-528b-475c-9349-6cbc2c8de34f.JPG',
      repo: 'https://github.com/kn8a/library',
      demo: 'https://kn8a.github.io/library/',
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
      stack: 'Vanilla JS, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192801674-fc887e90-51a6-4585-8e28-eee88f841d14.JPG',
      repo: 'https://github.com/kn8a/todo',
      demo: 'https://kn8a.github.io/todo-test/',
    },
    {
      name: 'Goals',
      description: 'Simple app for goal setting',
      stack: 'NodeJS, ExpresssJS, MongoDb, React',
      image:
        'https://user-images.githubusercontent.com/88045655/192803899-10f0996a-6b93-42af-8c13-8caa735e371f.JPG',
      repo: 'https://github.com/kn8a/goals',
      demo: 'https://kn8a-goals.herokuapp.com/',
    },

    {
      name: 'Tic-Tac-Toe',
      description: 'Minimal Tic-Tac-Toe game',
      stack: 'Vanilla JS, HTML, CSS',
      image:
        'https://user-images.githubusercontent.com/88045655/192949539-aaeef423-3a59-43eb-829f-ef98ed79dbe5.JPG',
      repo: 'https://github.com/kn8a/tic-tac-toe',
      demo: 'https://kn8a.github.io/tic-tac-toe/',
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
      name: 'Restaurant app',
      description: 'Restaurant site built entirely in JavaScript, CSS',
      stack: 'Vanilla JS, CSS',
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
        <Grid templateColumns="repeat(auto-fill, minmax(350px, 1fr))">
          {projects.slice(0, drawerBreakpoint).map(project => {
            return (
              <Box key={project.name}>
                <ProjectCard project={project} />
              </Box>
            );
          })}
          <Flex grow={1} alignItems={'center'} justifyContent={'center'}>
            <AnimationOnScroll
              animateIn="animate__tada"
              initiallyVisible={false}
              animateOnce={true}
            >
              <Button
                size={'lg'}
                variant={'outline'}
                shadow={'md'}
                ref={btnRef}
                onClick={onOpen}
                colorScheme={'green'}
                fontSize={'large'}
                leftIcon={<VscFileSubmodule size={'1.5rem'} />}
              >
                See more projects...
              </Button>
            </AnimationOnScroll>
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
                <Box key={project.name}>
                  <ProjectCard project={project} />
                </Box>
              );
            })}
          </DrawerBody>
          <DrawerFooter alignContent={'center'}>
            <Button
              variant="outline"
              colorScheme="red"
              mx={'auto'}
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Projects;
