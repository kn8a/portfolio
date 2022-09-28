import { Flex, Heading, Grid, Container, Box } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'



function Projects() {
    const projects = [
        {
            name: 'SWEETNOOK',
            description: 'Social media app inspired by Facebook',
            stack: 'NodeJS, MongoDb, React',
            image: 'https://user-images.githubusercontent.com/88045655/189862036-d063460a-ced4-4c91-8dba-299cc9a17a82.gif',
            repo: 'https://github.com/kn8a/sweetnook',
            demo:'https://kn8a.github.io/sweetnook/'
        },
        {
            name: 'GOALS',
            description: 'Simple app for goal setting',
            stack: 'NodeJS, MongoDb, React',
            image: 'https://user-images.githubusercontent.com/88045655/189862036-d063460a-ced4-4c91-8dba-299cc9a17a82.gif',
            repo: 'https://github.com/kn8a/goals',
            demo:'https://kn8a-goals.herokuapp.com/'
        },
        {
            name: 'FIND-THE-COUNTRY',
            description: `"Where's Waldo" style game where players match a country to its flag`,
            stack: 'React, Firebase',
            image: 'https://user-images.githubusercontent.com/88045655/172295420-53bdab44-69cc-446d-b2ad-c814b584dcdf.JPG',
            repo: 'https://github.com/kn8a/find-the-country',
            demo:'https://kn8a.github.io/find-the-country/'
        },
        {
            name: 'SHOPPING CART',
            description: 'Social media app inspired by Facebook',
            stack: 'React',
            image: 'https://user-images.githubusercontent.com/88045655/169199931-1d8ff400-08e6-4477-8e7d-d89ddc3c4caf.JPG',
            repo: 'https://github.com/kn8a/shopping-cart',
            demo:'https://kn8a.github.io/shopping-cart/'
        }
    
    ]


  return (
    <>
    <Container maxW="7xl" p={{ base: 5, md: 10 }} mx="auto" id='projects' marginTop={10}>
    <Heading>Projects</Heading>
    <Grid templateColumns='repeat(auto-fit, minmax(320px, 1fr))'>
        {projects.map((project) => {
            return (<Box 
                      
            ><ProjectCard project={project}/></Box>)
        })}

    </Grid>
    </Container>
    </>
  )
}

export default Projects