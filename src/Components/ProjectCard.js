import React, { useEffect, useState } from "react";
import { Box, Flex, Icon, Image, chakra, IconButton, Link, Divider } from "@chakra-ui/react";

import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GrStackOverflow } from 'react-icons/gr'
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard(props){

  const [project, setProject] = useState({
            name: '',
            description: '',
            stack: '',
            image: '',
            repo: '',
            demo:''
  })

  useEffect(()=> {
    setProject(props.project)
  }, [])
  
  return (
    <Flex
       //bg="#edf3f8"
       //_dark={{ bg: "#3e3e3e" }}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
      p={2}
        w="sm"
        mx="auto"
        bg="gray.50"
        _dark={{ bg: "gray.900" }}
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
            _dark={{ color: "white" }}
          >
            {project.name}
          </chakra.h1>

          <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
            {project.description}
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
            
          >
            <Icon as={GrStackOverflow} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="xs">
              {project.stack}
            </chakra.h1>
          </Flex>

          <Divider m={3}/>
          <Flex
            alignItems="center"
            justifyContent={'space-evenly'}
            mt={2}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Link href={project.repo} isExternal title="Repository">
            <IconButton colorScheme='gray' icon={<AiFillGithub size={'1.5rem'}/>}  aria-label='Repository'></IconButton>
            </Link>
            <Link href={project.demo} isExternal title="View demo">
          <IconButton icon={<FaExternalLinkAlt size={'1.3rem'}/>} aria-label='View demo'></IconButton>
          </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};


