import React from 'react'
import { Heading, Flex, Container, useColorModeValue } from '@chakra-ui/react' 
import Tool from './Tool'

function Tools() {

    const githubIcons = useColorModeValue('devicon-github-original colored', 'devicon-github-original' )
    
    const tools = [{
        name: 'VSCode',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
        name: 'Github',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
        name: 'Linux',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    },
    {
        name: 'Windows',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'
    },
    {
        name: 'Trello',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg'
    },
    {
        name: 'CSS3',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg'
    },
    {
        name: 'C',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg'
    },
    {
        name: 'Python',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    

    ]

  return (
    <Container id={'tools'} maxW="7xl" p={{ base: 5, md: 10 }} mx="auto" marginTop={10}>
        <Heading margin={10} marginBottom={5}>Tools</Heading>
        <Flex gap={5} flexWrap={'wrap'}>
        {tools.map(tool => {
            return (
                <Tool tool={tool}/>
            )
        })}
        </Flex>
        

    </Container>
  )
}

export default Tools