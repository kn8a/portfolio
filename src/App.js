import React from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
//  theme,
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
import Contact from './Components/Contact';
import theme from './theme';
import Background from './Components/Background';
import Footer from './Components/Footer';



function App() {
  return (
    
    <ChakraProvider theme={theme}>

      <Nav />
        
        <InfoSection />
        <Background/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </ChakraProvider>
    
    
  );
}

export default App;
