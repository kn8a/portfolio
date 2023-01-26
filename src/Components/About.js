import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Box,
  ListItem,
  UnorderedList,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Knightdark from '../assets/images/knight-gd1.svg';
import Knightlight from '../assets/images/knight-gl.svg';
import '@fontsource/la-belle-aurore';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Animated } from 'react-animated-css';

function About() {
  const knightimage = useColorModeValue(Knightlight, Knightdark);

  return (
    <>
      <Container
        id={'about'}
        maxW="7xl"
        p={{ base: 5, md: 10 }}
        mx="auto"
        marginTop={0}
      >
        <Flex
          paddingTop={10}
          alignItems={'flex-start'}
          gap={'2rem'}
          border={0}
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent={'flex-start'}
        >
          <Box border={0}>
            <Flex>
              <Accordion
                defaultIndex={[2]}
                maxWidth="container.lg"
                boxShadow={'sm'}
                m={4}
                gap={4}
                flexDirection={'column'}
                display={'flex'}
                border={0}
              >
                <Heading
                  as={'h2'}
                  size={'xl'}
                  textAlign={'left'}
                  m={4}
                  className="heading"
                  marginBottom={0}
                  fontFamily={'font1'}
                  fontWeight={400}
                  fontSize={'xx-large'}
                >
                  About me
                </Heading>
                <AccordionItem border={0}>
                  <h2>
                    <AccordionButton
                      bg="gray.100"
                      _dark={{ bg: 'gray.700' }}
                      rounded={10}
                      shadow={'md'}
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight={600}
                        border={0}
                      >
                        Early days
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    border={0}
                    p={6}
                    textAlign={'left'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'1rem'}
                  >
                    <p>
                      I have always had a strong interest in working with
                      computers, electronics, and software. From a young age, I
                      demonstrated a natural aptitude for understanding and
                      working with electronic machines.
                    </p>
                    <UnorderedList>
                      <ListItem>
                        At the age of 10, I was appointed as the "classroom
                        computer maintainer" for the 486 machine in my class. I
                        also taught myself how to solder boards and familiarized
                        myself with the functions of various electronic
                        components. components.
                      </ListItem>
                      <ListItem>
                        At 13, I installed my first Linux distribution, RedHat.
                      </ListItem>
                      <ListItem>
                        At 14, I learned Pascal, Visual Basic and HTML.
                      </ListItem>
                      <ListItem>
                        At 15, I gained skills in web design using Dreamweaver
                        and Flash.
                      </ListItem>
                      <ListItem>At 16, I learned Basic.</ListItem>
                      <ListItem>
                        Finally, at 18, I started a computer repair business.
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border={0}>
                  <h2>
                    <AccordionButton
                      bg="gray.200"
                      _dark={{ bg: 'gray.600' }}
                      rounded={10}
                      shadow={'md'}
                    >
                      <Box flex="1" textAlign="left" fontWeight={600}>
                        Young adult
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    p={6}
                    border={0}
                    textAlign={'left'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'1rem'}
                  >
                    <p>
                      Following an early start in the world of tech, I
                      transitioned to a successful sales role in the corporate
                      world.
                    </p>
                    <p>
                      In 2014, I decided to pivot and pursue a career in Real
                      Estate. I obtained my license and joined a small
                      brokerage. My background in technology quickly came in
                      handy as I began building my own website and assisting
                      other Realtors with theirs.
                    </p>
                    <p>
                      As my skills were recognized, I was increasingly involved
                      in the company's projects related to web presence and
                      emerging technologies in the industry.
                    </p>
                    <p>
                      I took on the responsibility of designing, building, and
                      maintaining the company's main website, which included
                      features such as a forum, agent dashboard, and property
                      search. Additionally, I worked on developing a CRM, lead
                      distribution tool, and record-keeping software, as well as
                      various smaller design projects.
                    </p>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border={0}>
                  <h2>
                    <AccordionButton
                      bg="gray.300"
                      _dark={{ bg: 'gray.500' }}
                      rounded={10}
                      shadow={'md'}
                    >
                      <Box flex="1" textAlign="left" fontWeight={600}>
                        Present
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    p={6}
                    border={0}
                    textAlign={'left'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'1rem'}
                  >
                    <p>
                      In 2020, I set out to broaden my expertise and become a
                      full-stack developer.
                    </p>
                    <p>
                      To achieve this goal, I took the Harvard Computer Science
                      course (
                      <Link
                        isExternal
                        textDecoration={'underline'}
                        href="https://cs50.harvard.edu/certificates/f545702b-cf13-4c81-b8e6-b971850b6015"
                      >
                        CS50 Certificate
                      </Link>
                      ) as a foundation, and then moved on to The Odin Project
                      to gain the skills needed to develop backend and frontend
                      web apps using current technologies.
                    </p>

                    <p>
                      Through these courses, I built a range of projects,
                      starting with algorithms and file manipulation using C and
                      Python, and finally, I developed a social media app
                      utilizing NodeJS Backend API and React Frontend.
                    </p>
                    <p>
                      Some examples of my{' '}
                      <AnchorLink className="about-link" href="#projects">
                        projects
                      </AnchorLink>{' '}
                      and the{' '}
                      <AnchorLink className="about-link" href="#skills">
                        skills
                      </AnchorLink>{' '}
                      I acquired during this process are listed below.
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Box>

          <Box width={{ base: '50%', md: '30%' }} alignSelf={'center'}>
            <Image id="knightImg" src={knightimage} objectFit={'cover'}></Image>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default About;
