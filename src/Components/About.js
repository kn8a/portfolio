import { Flex, Accordion, AccordionItem, AccordionIcon, AccordionPanel, AccordionButton, Box, MinusIcon, AddIcon, ChakraProvider, Container, Center, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import InfoSection from './InfoSection'

import Knight from '../assets/images/ChessKnight.svg'
import KnightBlue from '../assets/images/knight-blue.svg'
import Knight12 from '../assets/images/knight12.svg'
import SpinKnight from './SpinKnight'
import { ParallaxProvider } from 'react-scroll-parallax'
  
  

function About() {
  return (
    <>
    <Center id='about'>

    
    <Box maxW={980} border={0}>
    <Flex paddingTop={20} alignItems={'flex-start'} gap={'2rem'} border={0}>
    
    <Box width={'70%'} border={0}>

    
    <Flex>
    <Accordion defaultIndex={[2]} width={'100'} boxShadow={'sm'} m={4} gap={4} flexDirection={'column'} display={'flex'} border={0}>
    <Heading  as={'h2'} size={'xl'} textAlign={'left'} m={4} className='heading' marginBottom={0}>About me</Heading>

     
     <AccordionItem border={0}>
    <h2>
      <AccordionButton
      bg="gray.100"
      _dark={{ bg: "gray.700" }}
      rounded={10}
      shadow={'md'}
      >
        <Box flex='1' textAlign='left' fontWeight={600} border={0}>
          Early days
        </Box>
        <AccordionIcon />
      </AccordionButton >
    </h2>
    <AccordionPanel border={0} p={6} textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
       
    <p>I have always been passionate about working and tinkering with computers, electronics and software. Since young age, I was excelling in understanding how to work with electronic machines.</p>

    <UnorderedList>
        <ListItem>At 10, I was the "classroom computer maintainer" of the 486 machine we had in class. I also learned to solder boards, and functions of different electronic components.</ListItem>
        <ListItem>at 13, installed my first Linux distro - RedHat.</ListItem>
        <ListItem>at 14, learned Pascal, Visual Basic and HTML.</ListItem>
        <ListItem>at 15, learned Web design using Dreamweaver and Flash.</ListItem>
        <ListItem>at 16, learned Basic.</ListItem>
        <ListItem>at 18, started a computer repair business.</ListItem>
    </UnorderedList>
    
    
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem border={0}>
    <h2>
      <AccordionButton 
      bg="gray.200"
      _dark={{ bg: "gray.600" }}
      rounded={10}
      shadow={'md'}
      
      >
        <Box flex='1' textAlign='left' fontWeight={600}>
          Young adult
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel p={6} border={0} textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
      
    <p>
      Following an early start in the world of tech, my life lead me into a successfull sales career in the corporate world.
      </p>
      
        <p>
In 2014 I decided to change my career and enter the Real Estate business. I obtained my real Estate license and joined a small brokerage. Immediately, my tech background kicked into 5th gear and in no-time, I was building my website and helping other Realtors with theirs.
</p>
<p>
Once my skills were noticed I was incorporated into every aspect of the company's projects in the realm of web presence and emerging technologies in the industry.
</p>
<p>
I ended up designing, building and maintaining the company's main website including a forum, agent dashboard, property search, etc... In addition, I worked on building a CRM, lead distribution tool, record keeping software and countless small design projects.
      </p>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem border={0}>
    <h2>
      <AccordionButton
      bg="gray.300"
      _dark={{ bg: "gray.500" }}
      rounded={10}
      shadow={'md'}>

        <Box flex='1' textAlign='left' fontWeight={600}>
          Currently
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel p={6} border={0} textAlign={'left'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
      
      <p>
      In 2021 I decided to follow my passion and get back into the tech industry as a full-stack developer.
      </p>
    <p>I completed the Harvard Computer Science (CS50) course as a refresher on core principles of computing. Afterwards, I moved on to completing The Odin Project to become a full-stack developer using new and modern technologies, 
        </p>
        <p>
         I got the chance to build a variety of projects starting with basic JavaScript and finished with social media app consisting of NodeJS Backend API and React Frontend.
        </p>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

    </Flex>
    </Box>

    <Image src={Knight12} rounded={20} width={'30%'} objectFit={'cover'} marginTop={8}></Image>
    
    </Flex>
    </Box>
    </Center>
    </>
  )
}

export default About