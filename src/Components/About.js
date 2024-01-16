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
import React, { useEffect, useState } from 'react';
import Knightdark from '../assets/images/knight-gd1.svg';
import Knightlight from '../assets/images/knight-gl.svg';
import '@fontsource/la-belle-aurore';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BGParticles from './BGParticles';
import AsciiArt from './AsciiArt';

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
              <Box
                defaultIndex={[2]}
                maxWidth="container.lg"
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
                <Box pl={4} pr={6}>
                  <Text>
                    <p>
                      🖥️ From fixing and maintaining the classroom computer at
                      age 10 to running my own computer repair business at 18,
                      I've been a tech enthusiast as far as I can remember.
                      After a detour into sales, I jumped into real estate,
                      where my tech skills came to the forefront as I built
                      websites and innovative tools. Recognized for my
                      abilities, I got the opportunity to design and build the
                      company's websites, as well as, lead the implementation
                      and testing of a CRM, lead distribution tool, and other
                      resources for agents. 🌐
                    </p>
                    <br></br>
                    <p>
                      🚀 Then, in 2020, I thought, "Why not level-up to
                      full-stack?" So, I hopped into Harvard's CS50 program,
                      aced it, and then rocked The Odin Project. In the process,
                      I crafted a variety of{' '}
                      <AnchorLink className="about-link" href="#projects">
                        projects
                      </AnchorLink>{' '}
                      using Javascript, C, and Python, as well as, tools and
                      frameworks such as NodeJS, React, MongoDB and many{' '}
                      <AnchorLink className="about-link" href="#skills">
                        others
                      </AnchorLink>
                      ... 🛠️
                    </p>

                    <br></br>
                    <p>
                      🎓 And here's the cherry on top — I recently graduated
                      with a Bachelor of Science in Computer Science, which now
                      makes me officially a tech pro, and ready to rock the
                      coolest projects out there! 🚀✨
                    </p>
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box
            className="knightImage"
            width={{ base: '50%', md: '30%' }}
            alignSelf={'center'}
            zIndex={'-2'}
            objectFit="cover"
          >
            <AsciiArt/>
            {/* <Image id="knightImg" src={knightimage} objectFit={'cover'}></Image> */}
            {/* <BGParticles/> */}
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default About;
