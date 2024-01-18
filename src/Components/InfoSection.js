import * as React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  Box,
  Spinner,
  IconButton,
  Divider,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';

// import CypherText from 'react-cypher-text-loop';
import CypherText from './CypherText';
import ReactPlayer from 'react-player/lazy';

const iconProps = {
  variant: 'solid',
  size: 'lg',
  isRound: true,
};

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
        spacing={{ base: 6, lg: 6 }}
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
        <Text textAlign="left" maxWidth={'container.sm'}>
          Tech lover and coding enthusiast! Embracing the power of the web, AI
          and open source. <br />
          Explore my diverse projects and skills that define me as a dynamic
          developer, always up for thrilling new challenges!
        </Text>
        <Divider mt={2} mb={2} />
        <Flex alignItems="center" justify="left" w="100%" mb={0} pb={0}>
          <Box textAlign="center" mb={0} pb={0} display="flex" gap={4}>
            {accounts.map((sc, index) => (
              <Flex
                key={index}
                alignItems="center"
                borderWidth={'1px'}
                borderColor={'gray.200'}
                _dark={{ borderColor: 'gray.700' }}
                p={'0.5'}
                as={Link}
                isExternal
                href={sc.url}
                aria-label={sc.label}
                title={sc.label}
                shadow="sm"
                rounded={'full'}
                gap="1"
              >
                <IconButton
                  as={Link}
                  isExternal
                  href={sc.url}
                  aria-label={sc.label}
                  title={sc.label}
                  colorScheme={sc.type}
                  rounded="full"
                  icon={sc.icon}
                  variant={'solid'}
                  size="md"
                  fontSize="x-large"
                  isRound={true}
                  // {...iconProps}
                />
                <Text fontSize={'small'} mr={2}>
                  <small>{sc.label}</small>
                </Text>
              </Flex>
            ))}
          </Box>
        </Flex>
      </VStack>
      <Flex
        width={'100%'}
        flex={1}
        alignItems={'center'}
        justifyContent={{ base: 'center', lg: 'center' }}
        pt={{ base: '10', sm: '10', md: '10', lg: '10' }}
        // border={'2px '}
      >
        <Box
          shadow={'md'}
          width={{ base: '90%', sm: '100%' }}
          maxW={'400px'}
          h={'230px'}
          className="video-wrapper"
          display={'flex'}
          alignItems="center"
        >
          <ReactPlayer
            fallback={<Spinner color="red.500" />}
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
  {
    url: 'https://github.com/kn8a',
    label: 'Github',
    type: 'gray',
    icon: <FaGithub />,
  },
  {
    url: 'https://kn8.hashnode.dev/',
    label: 'Blog',
    type: 'gray',
    icon: <FaBlog />,
  },

  {
    url: 'https://www.linkedin.com/in/kn8dev/',
    label: 'LinkedIn',
    type: 'gray',
    icon: <FaLinkedin />,
  },
];

export default InfoSection;
