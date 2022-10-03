import * as React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  Box,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// import {
//   FaGithub,
//   FaDev,
//   FaLinkedin,
//   FaQuora,
//   FaTwitter,
// } from 'react-icons/fa';

import CypherText from 'react-cypher-text-loop';
import ReactPlayer from 'react-player';

// const iconProps = {
//   variant: 'ghost',
//   size: 'lg',
//   isRound: true,
// };

const InfoSection = () => {
  return (
    <Container
      maxW="7xl"
      p={{ base: 5, md: 10 }}
      pb={0}
      mb={0}
      id={'top'}
      display="flex"
      justifyContent={'space-between'}
      flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
    >
      <VStack
        minW={{ base: '100%', lg: '600px' }}
        spacing={{ base: 6, lg: 10 }}
        px={2}
        alignItems={{ base: 'flex-start', sm: 'flex-start' }}
        mb={0}
        pb={0}
        pl={{ base: '2px', md: 0 }}
      >
        <Stack justifyContent="center" alignItems="center" mb={0} pb={0}>
          <Text fontSize="sm" marginTop={20}></Text>
        </Stack>
        <Heading
          textAlign={{ base: 'left', sm: 'left' }}
          fontSize={{ base: '1.5rem', md: '2.5rem' }}
          fontFamily={'font1'}
        >
          Hi! <div id="hand">👋</div>
          <br />I am {process.env.REACT_APP_NAME},
          <br />
          <CypherText
            className={'cypher'}
            textList={[
              'a Chess player.',
              'a Programmer.',
              'a Full-Stack Developer.',
              'a Tennis Player.',
              'a learner.',
              'a creator.',
              'a traveler.',
            ]}
            delay={800}
          />
        </Heading>
        <Text textAlign="left">
          Passionate about Tech. Lover of web and opensource.
        </Text>
        {/* <Divider /> */}
        {/* <Flex alignItems="center" justify="left" w="100%" mb={0} pb={0}>
          <Box textAlign="center" mb={0} pb={0}>
            {accounts.map((sc, index) => (
              <IconButton
                key={index}
                as={Link}
                isExternal
                href={sc.url}
                aria-label={sc.label}
                colorScheme={sc.type}
                rounded="full"
                icon={sc.icon}
                {...iconProps}
              />
            ))}
          </Box>
        </Flex> */}
      </VStack>
      <Flex
        width={'100%'}
        flex={1}
        alignItems={'center'}
        justifyContent={{ base: 'center', lg: 'center' }}
        pt={{ base: '10', sm: '10', md: '10', lg: '24' }}
      >
        <Box
          shadow={'md'}
          width={{ base: '90%', sm: '100%' }}
          maxW={'400px'}
          h="full"
          className="video-wrapper"
        >
          <ReactPlayer
            controls={true}
            width={'100%'}
            height={'100%'}
            url="https://youtu.be/zE8vtrzFuCI"
          />
        </Box>
      </Flex>
    </Container>
  );
};

const accounts = [
  // {
  //   url: 'https://github.com/kn8a',
  //   label: 'Github Account',
  //   type: 'gray',
  //   icon: <FaGithub />,
  // },
  // {
  //   url: 'https://twitter.com',
  //   label: 'Twitter Account',
  //   type: 'twitter',
  //   icon: <FaTwitter />,
  // },
  // {
  //   url: 'https://dev.to',
  //   label: 'Dev Account',
  //   type: 'gray',
  //   icon: <FaDev />,
  // },
  // {
  //   url: 'https://linkedin.com',
  //   label: 'LinkedIn Account',
  //   type: 'linkedin',
  //   icon: <FaLinkedin />,
  // },
  // {
  //   url: 'https://www.quora.com',
  //   label: 'Quora Account',
  //   type: 'red',
  //   icon: <FaQuora />,
  // },
];

export default InfoSection;
