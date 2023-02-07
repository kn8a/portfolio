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
      <div className="project-card-border">
        <Box
          p={2}
          w='350px'
          mx="auto"
          bgGradient='linear(gray.300 0%,, gray.50 50%, gray.50 75%, gray.50 100%)'
          // bg={'gray.50'}
          _dark={{ bg: 'gray.900' }}
          shadow="lg"
          border={'2px gray.800 solid'}
          rounded="lg"
          overflow="hidden"
          className="project-card !important"
        >
          <Link
            href={project.repo}
            isExternal
            title={`${project.name} repository`}
          >
            <Image
              className="project-image"
              p={2}
              rounded={20}
              w="full"
              h={56}
              fit="cover"
              objectPosition="center"
              src={project.image}
              alt={`${project.name} image`}
              shadow={'md'}
            />
          </Link>

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
              <Link href={project.repo} isExternal title="Repository" >
                <Button

                fontSize={'sm'}
                  leftIcon={<AiFillGithub size={'1.5rem'} />}
                  variant={'outline'}
                  shadow={'md'}
                >
                  Source
                </Button>
              </Link>
              <Link href={project.demo} isExternal title="View demo">
                <Button
                colorScheme={'gray'}
                fontSize={'sm'}
                  leftIcon={<FaExternalLinkAlt size={'1.5rem'} />}
                  variant='outline'
                  shadow={'md'}
                >
                  Demo
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </div>
    </Flex>
  );
}