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
import KnightGray from '../assets/images/knight-gray.svg';
import '@fontsource/la-belle-aurore';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AsciiArt from './AsciiArt';
import AudioPlayer from './AudioPlayer';
import ParticleImage from './ParticleImage';

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
                defaultindex={[2]}
                maxWidth="container.lg"
                m={4}
                gap={4}
                flexDirection={'column'}
                display={'flex'}
                // border={'1px'}
              >
                <Flex
                  justifyItems={'center'}
                  alignItems={'baseline'}
                  justifyContent={'space-between'}
                  direction={{ base: 'column', md: 'row' }}
                  placeContent={'flex-start'}
                >
                  <Heading
                    as={'h2'}
                    minWidth={180}
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
                  <AudioPlayer />
                </Flex>

                <Box pl={2}>
                  <Text lineHeight={1.7}>
                    <Text backgroundColor={'chakra-body-bg'} rounded={15} >
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

          <Box className="knightImage" alignSelf={'center'} >
          <ParticleImage
        width = {270}
        height = {400}
        src = {KnightGray}
        particleSize = {3}
        push = {0.01}
        threshold = {60}
        particleType = "square"
        gap = {3}
        noise = {0.2}
        canvasWidth = {290}
        canvasHeight = {430}
        returnSpeed = {0.075}
        
      />
            {/* <AsciiArt /> */}
            
            {/* <Image id="knightImg" src={knightimage} objectFit={'cover'}></Image> */}
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default About;
