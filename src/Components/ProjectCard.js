import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Icon,
  Image,
  chakra,
  Link,
  Divider,
  Button,
} from '@chakra-ui/react';

import { GrStackOverflow } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard(props) {
  const [project, setProject] = useState({
    name: '',
    description: '',
    stack: '',
    image: '',
    repo: '',
    demo: '',
  });

  useEffect(() => {
    setProject(props.project);
  }, []);

  return (
    <Flex p={5} w="full" alignItems="center" justifyContent="center">
      <Box
        p={2}
        w="sm"
        mx="auto"
        bg="gray.50"
        _dark={{ bg: 'gray.900' }}
        shadow="lg"
        border={'2px gray.800 solid'}
        rounded="lg"
        overflow="hidden"
      >
        <Image
          p={2}
          rounded={20}
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src={project.image}
          alt="avatar"
          shadow={'md'}
        />
        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: 'white' }}
          >
            {project.name}
          </chakra.h1>

          <chakra.p py={2} color="gray.700" _dark={{ color: 'gray.400' }}>
            {project.description}
          </chakra.p>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: 'gray.200' }}
          >
            <Icon as={GrStackOverflow} h={6} w={6} mr={2} />
            <chakra.h1 px={2} fontSize="xs">
              {project.stack}
            </chakra.h1>
          </Flex>

          <Divider m={3} />
          <Flex
            alignItems="center"
            justifyContent={'space-evenly'}
            mt={2}
            color="gray.700"
            _dark={{ color: 'gray.200' }}
          >
            <Link href={project.repo} isExternal title="Repository">
              <Button
                leftIcon={<AiFillGithub size={'1.5rem'} />}
                variant="solid"
              >
                Source
              </Button>
            </Link>
            <Link href={project.demo} isExternal title="View demo">
              <Button
                leftIcon={<FaExternalLinkAlt size={'1.5rem'} />}
                variant="solid"
              >
                Demo
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
