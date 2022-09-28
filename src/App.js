import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Nav from './Components/Nav';
import About from './Components/About';
import InfoSection from './Components/InfoSection';
import Projects from './Components/Projects';
import './app.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import Skills from './Components/Skills';
import Tools from './Components/Tools';



function App() {
  return (
    
    <ChakraProvider theme={theme}>

      <Nav />
        
        <InfoSection/>
        <About/>
        <Projects/>
        <Skills/>
        <Tools/>
    </ChakraProvider>
    
    
  );
}

export default App;
