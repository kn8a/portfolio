import {
  Flex,
  Box,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';
// import Knightdark from '../assets/images/knight-gd1.svg';
// import Knightlight from '../assets/images/knight-gl.svg';
import KnightGray from '../assets/images/knight-gray.svg';
import '@fontsource/la-belle-aurore';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import AsciiArt from './AsciiArt';
// import AudioPlayer from './AudioPlayer';
import ParticleImage from './ParticleImage';

function About() {
  // const knightimage = useColorModeValue(Knightlight, Knightdark);

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
                  {/* <AudioPlayer /> */}
                </Flex>

                <Box pl={2}>
                  <Text lineHeight={1.7}>
                    <Text backgroundColor={'chakra-body-bg'} rounded={15} >
                      <p>
                      💻 I have been a dedicated technology enthusiast from a young age, starting with fixing and maintaining classroom computers at age 10, and progressing to running my own computer repair business by age 18. 
                      My career took an initial turn into sales, and later I transitioned into real estate where my technical skills became invaluable. In addition to operating as an agent and then a broker, I was responsible for designing and building company websites and leading the implementation and testing of a CRM, lead distribution tool, and other essential resources for agents. 🌟
                      </p>
                    </Text>
                    <br></br>
                    <Text backgroundColor={'chakra-body-bg'} rounded={15}>
                      <p>
                      🚀 In 2020, I decided to enhance my technical expertise by pursuing full-stack development. 
                      I completed Harvard's CS50 program and then further advanced my skills through The Odin Project. 
                      During this period, I developed a range of projects utilizing JavaScript, C, and Python, and worked a variety of tools and frameworks... 🛠️
                      </p>
                    </Text>

                    <br></br>
                    <Text backgroundColor={'chakra-body-bg'} rounded={15}>
                      <p>
                      🎓 Recently, I graduated with a Bachelor of Science in Computer Science, solidifying my credentials as a technology professional. I am now equipped and eager to contribute to innovative and impactful projects in the tech industry. 🌐✨
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
