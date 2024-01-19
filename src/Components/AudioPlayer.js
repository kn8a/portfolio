import React, { useRef, useState } from 'react';
import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import { FaRegPlayCircle, FaRegPauseCircle, FaUndo, FaPause, FaPlay } from 'react-icons/fa';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const restartAudio = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <Button m={0} direction="row" variant={'outline'} size={'sm'} colorScheme={'gray'} fontSize={'sm'} alignItems="center" display={'flex'} minWidth={160} justifyContent={'space-between'} p={0}  borderTopStyle={'solid'}cursor={'default'} rounded={20} _hover={'false'}>
      {/* Audio element with public folder path */}
      <audio ref={audioRef} src="/kn8AboutVoice.mp3" onEnded={handleAudioEnded}></audio>

      {/* Play/Pause Button */}
      <IconButton
        mr={2}
        roundedLeft={20}
        roundedRight={0}
        variant='outline'
        colorScheme='gray'
        aria-label={isPlaying ? 'Pause' : 'Play'}
        icon={isPlaying ? <FaPause color='lightgreen'/> : <FaPlay color='lightgreen'/>}
        onClick={togglePlayPause}
        fontSize={'sm'}
        size={'sm'}
        
      >
        {isPlaying ? 'Pause' : 'Read audio'}
      </IconButton>
      Play Audio
      {/* Restart Button */}
      <IconButton
      ml={2}
        roundedLeft={0}
        roundedRight={20}
        variant='outline'
        colorScheme='gray'
        aria-label='Restart'
        icon={<FaUndo color='lightgreen'/>}
        onClick={restartAudio}
        fontSize={'sm'}
        size={'sm'}
      >
        Restart
      </IconButton>
      
      
      
    </Button>
  );
};

export default AudioPlayer;