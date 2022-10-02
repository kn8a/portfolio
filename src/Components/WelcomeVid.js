import { Box, Flex } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

function WelcomeVid() {
  return (
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/zE8vtrzFuCI'
          width='100%'
          height='100%'
        />
      </div>
    // <ReactPlayer
    //   controls={true}
    //   width={400}
    //   height={225}
    //   url="https://youtu.be/zE8vtrzFuCI"
    // />
  );
}

export default WelcomeVid;
