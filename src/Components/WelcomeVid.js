import { Box, Flex } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

function WelcomeVid() {
  return (
    <ReactPlayer
      controls={true}
      width={340}
      height={192}
      playsinline={true}
      url="https://youtu.be/zE8vtrzFuCI"
    />
  );
}

export default WelcomeVid;
