import * as React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  Box,
  Image,
  IconButton,
  Divider,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';
// import Tilt from 'react-parallax-tilt';
// import Boop from './Boop';

import CypherText from './CypherText';

const InfoSection = () => {
  return (
    <Container
      maxW="7xl"
      p={{ base: 5, md: 10 }}
      pt={{ base: 10, md: 20, lg: 0 }}
      pb={0}
      mb={0}
      id={'top'}
      display="flex"
      justifyContent={'space-around'}
      flexDirection={{
        base: 'column-reverse',
        sm: 'column-reverse',
        md: 'column-reverse',
        lg: 'row-reverse',
      }}
    >
      <VStack
        minW={{ base: '100%', lg: '600px' }}
        spacing={{ base: 2, lg: 6 }}
        px={2}
        alignItems={{ base: 'flex-start', sm: 'flex-start' }}
        mb={0}
        pb={0}
        pl={{ base: '2px', md: 0 }}
        flex={1}
        maxW='700px'
        // border={'2px '}
        // borderColor='green'
      >
        <Stack justifyContent="center" alignItems="center" mb={0} pb={0}>
          <Text
            fontSize="sm"
            marginTop={{ base: '5', sm: '5', md: '20', lg: '20' }}
          ></Text>
        </Stack>
        <Heading
          textAlign={{ base: 'left', sm: 'left' }}
          fontSize={{ base: '1.6rem', md: '2.7rem' }}
          fontFamily={'font1'}
          lineHeight={1.4}
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
        <Text textAlign="left" maxWidth={'container.sm'} lineHeight={1.7}>
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
                  {sc.label}
                </Text>
              </Flex>
            ))}
          </Box>
        </Flex>
      </VStack>
      <Flex
        // width={'100%'}
        maxW='400px'
        flex={1}
        alignItems={'center'}
        justifyContent={{ base: 'center', lg: 'center' }}
        pt={{ base: '10', sm: '10', md: '10', lg: '10' }}
        mt={{ base: '5', sm: '5', md: '0', lg: '0' }}
        // border={'2px '}
        // borderColor='green'
      >
        {/* <Boop rotation={20} timing={200}> */}
        <Image
          borderRadius="full"
          boxSize={{ base: '200px', md: '250px', lg: '300px' }}
          src="/kn8image.jpg"
          alt="Andrew Knight"
          boxShadow="dark-lg"
        ></Image>
        {/* </Boop> */}
        {/* <Box
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
        </Box> */}
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
    url: 'https://www.linkedin.com/in/knightdev/',
    label: 'LinkedIn',
    type: 'gray',
    icon: <FaLinkedin />,
  },
];

export default InfoSection;
