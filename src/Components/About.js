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
} from '@chakra-ui/react';
import React from 'react';
import Knightdark from '../assets/images/knight-gd1.svg';
import Knightlight from '../assets/images/knight-gl.svg';
import '@fontsource/la-belle-aurore';

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
                width={'100'}
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
                      I have always been passionate about working and tinkering
                      with computers, electronics and software. Since young age,
                      I was excelling in understanding how to work with
                      electronic machines.
                    </p>
                    <UnorderedList>
                      <ListItem>
                        At 10, I was the "classroom computer maintainer" of the
                        486 machine we had in class. I also learned to solder
                        boards, and functions of different electronic
                        components.
                      </ListItem>
                      <ListItem>
                        at 13, installed my first Linux distro - RedHat.
                      </ListItem>
                      <ListItem>
                        at 14, learned Pascal, Visual Basic and HTML.
                      </ListItem>
                      <ListItem>
                        at 15, learned Web design using Dreamweaver and Flash.
                      </ListItem>
                      <ListItem>at 16, learned Basic.</ListItem>
                      <ListItem>
                        at 18, started a computer repair business.
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
                      Following an early start in the world of tech, my life
                      lead me into a successful sales career in the corporate
                      world.
                    </p>
                    <p>
                      In 2014 I decided to change my career and enter the Real
                      Estate business. I obtained my real Estate license and
                      joined a small brokerage. Immediately, my tech background
                      kicked into 5th gear and in no-time, I was building my
                      website and helping other Realtors with theirs.
                    </p>
                    <p>
                      Once my skills were noticed I was incorporated into every
                      aspect of the company's projects in the realm of web
                      presence and emerging technologies in the industry.
                    </p>
                    <p>
                      I ended up designing, building and maintaining the
                      company's main website including a forum, agent dashboard,
                      property search, etc... In addition, I worked on building
                      a CRM, lead distribution tool, record keeping software and
                      countless small design projects.
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
                      In 2020 I decided to follow my passion and get back into
                      the tech industry as a full-stack developer.
                    </p>
                    <p>
                      I completed the Harvard Computer Science course (
                      <Link
                        isExternal
                        textDecoration={'underline'}
                        href="https://cs50.harvard.edu/certificates/f545702b-cf13-4c81-b8e6-b971850b6015"
                      >
                        CS50 Certificate
                      </Link>
                      ) as a refresher on core principles of computing.
                      Afterwards, I moved on to completing The Odin Project to
                      become a full-stack developer, using new and modern
                      technologies.
                    </p>
                    <p>
                      I got the chance to build a variety of projects starting
                      with basic JavaScript and finishing with social media app
                      consisting of NodeJS Backend API and React Frontend.
                    </p>
                    <p>
                      Below are some of my projects from the aforementioned
                      courses. As well as the skills I acquired in the process.
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Box>
          <Image
            id="knightImg"
            src={knightimage}
            rounded={20}
            alignSelf={'center'}
            width={{ base: '50%', md: '30%' }}
            objectFit={'cover'}
            marginTop={8}
          ></Image>
        </Flex>
      </Container>
    </>
  );
}

export default About;
