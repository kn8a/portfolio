import {
  Flex,
  Box,
  Container,
  Heading,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import Knightdark from '../assets/images/knight-gd1.svg';
import Knightlight from '../assets/images/knight-gl.svg';
import '@fontsource/la-belle-aurore';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AsciiArt from './AsciiArt';
import Tilt from 'react-parallax-tilt';

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
        // border={'1px'}
      >
        <Flex
          paddingTop={10}
          alignItems={'flex-start'}
          gap={'2rem'}
          // border={'2px'}
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
                // border={'1px'}
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
                <Box pl={2}>
                  <Text>
                    <Text backgroundColor={'chakra-body-bg'} rounded={15}>
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
                    </Text>
                    <br></br>
                    <Text backgroundColor={'chakra-body-bg'} rounded={15}>
                      <p>
                        🚀 Then, in 2020, I thought, "Why not level-up to
                        full-stack?" So, I hopped into Harvard's CS50 program,
                        aced it, and then rocked The Odin Project. In the
                        process, I crafted a variety of{' '}
                        <AnchorLink className="about-link" href="#projects">
                          projects
                        </AnchorLink>{' '}
                        using Javascript, C, and Python, as well as tools and
                        frameworks such as NodeJS, React, MongoDB and many{' '}
                        <AnchorLink className="about-link" href="#skills">
                          others
                        </AnchorLink>
                        ... 🛠️
                      </p>
                    </Text>

                    <br></br>
                    <Text backgroundColor={'chakra-body-bg'} rounded={15}>
                      <p>
                        🎓 And here's the cherry on top — I recently graduated
                        with a Bachelor of Science in Computer Science, which
                        now makes me officially a tech pro, and ready to rock
                        the coolest projects out there! 🚀✨
                      </p>
                    </Text>
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box
            className="knightImage"
            alignSelf={'center'}
            zIndex={'-2'}
            // border={'1px'}
            // borderColor={'red'}
          >
            <AsciiArt />
            {/* <Image id="knightImg" src={knightimage} objectFit={'cover'}></Image> */}
            {/* <BGParticles/> */}
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default About;
