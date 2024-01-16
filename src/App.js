import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Nav from './Components/Nav';
import About from './Components/About';
import InfoSection from './Components/InfoSection';
import Projects from './Components/Projects';
import './app.css';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import theme from './theme';
import Background from './Components/Background';
import Footer from './Components/Footer';
import BGParticles from './Components/BGParticles';


function App() {
  return (
    <ChakraProvider theme={theme} >
      <Nav />
      
      <InfoSection />
      
      <Background />
      <Flex >
          <BGParticles/>
        </Flex>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
