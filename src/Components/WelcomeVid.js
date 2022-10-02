import { Box, Flex } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

function WelcomeVid() {
  return (
    <ReactPlayer
      controls={true}
      width={400}
      height={225}
      url="https://youtu.be/zE8vtrzFuCI"
    />
  );
}

export default WelcomeVid;
