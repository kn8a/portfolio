import {
  Flex,
  Box,
  Container,
  Heading,
  useBreakpointValue,
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
import { useEffect, useState } from 'react';

function About() {
  // const knightimage = useColorModeValue(Knightlight, Knightdark);
  const aspectRatio = 270 / 400;
  const [size, setSize] = useState({
    width: Math.min(Math.max(window.innerWidth * 0.4, 300), 500),
    height: Math.min(Math.max(window.innerWidth * 0.4, 300), 500) / aspectRatio, // Adjust height dynamically
  });

  useEffect(() => {
    const updateSize = () => {
      const newWidth = Math.min(Math.max(window.innerWidth * 0.4, 300), 500);
      const newHeight = newWidth / aspectRatio; // Calculate height based on aspect ratio

      setSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Initialize with correct size

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <>
      <Container
        id={'about'}
        maxW="7xl"
        // p={{ base: 5, md: 10 }}
        mx="auto"
        marginTop={0}
        // border={'1px'}
        justifyContent={'center'}
        display={'flex'}
      >
        
        <Flex
          paddingTop={4}
          alignItems={'flex-start'}
          gap={'2rem'}
          // border={'2px'}
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent={'flex-start'}
        >
          

          <Box className="knightImage"  alignSelf={'center'} >
          <ParticleImage
        width = {size.width}
        height = {size.height}
        src = {KnightGray}
        particleSize = {3}
        push = {0.01}
        threshold = {60}
        particleType = "square"
        gap = {4}
        noise = {0.3}
        canvasWidth = {size.width*1.2}
        canvasHeight = {size.height*1.2}
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
