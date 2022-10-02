import * as React from 'react';
import {
  Container,
  //  Avatar,
  Heading,
  Text,
  VStack,
  Stack,
  //  Link,
  //  IconButton,
  //  Divider,
  Flex,
  Box,
  //  Box,
  //  Center,
  //  chakra,
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
import WelcomeVid from './WelcomeVid';

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
        spacing={6}
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
          // margin="0 auto"
          width={{ base: '23rem', sm: 'auto' }}
          fontSize={{ base: '1.7rem', md: '3rem' }}
          fontFamily={'font1'}
        >
          Hi! <div id="hand">👋</div>
          <br />I am {process.env.REACT_APP_NAME},
          <br />
          <Flex>
            <CypherText
              textList={[
                'a Chess player.',
                'a Programmer.',
                'a Full-stack Developer.',
                'a Tennis Player.',
                'a learner.',
                'a creator.',
                'a traveler.',
              ]}
              delay={800}
            />
          </Flex>
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
        alignItems={'flex-start'}
        justifyContent={'center'}
        pt={{ base: '10', sm: '10', md: '10', lg: '28' }}
      >
        <Box shadow={'md'}>
          <WelcomeVid />
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
  //   url: 'https://twitter.com/muhammad_ahmaad',
  //   label: 'Twitter Account',
  //   type: 'twitter',
  //   icon: <FaTwitter />,
  // },
  // {
  //   url: 'https://dev.to/m_ahmad',
  //   label: 'Dev Account',
  //   type: 'gray',
  //   icon: <FaDev />,
  // },
  // {
  //   url: 'https://linkedin.com/in/muhammad-ahmad20',
  //   label: 'LinkedIn Account',
  //   type: 'linkedin',
  //   icon: <FaLinkedin />,
  // },
  // {
  //   url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
  //   label: 'Quora Account',
  //   type: 'red',
  //   icon: <FaQuora />,
  // },
];

export default InfoSection;
