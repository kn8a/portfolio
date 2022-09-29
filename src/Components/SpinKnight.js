import React from 'react';
import { Image } from '@chakra-ui/react';
import Knight from '../assets/images/ChessKnight.svg';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';

function SpinKnight() {
  const mage =
    useParallax <
    HTMLDivElement >
    {
      scale: [0.5, 1, 'easeInQuad'],
    };
  const frog =
    useParallax <
    HTMLDivElement >
    {
      scaleX: [1, 0, 'easeInQuad'],
    };

  const moon =
    useParallax <
    HTMLDivElement >
    {
      scale: [1.5, 1, 'easeInQuad'],
    };
  return (
    <div className="spinner">
      <div className="mage" ref={mage.ref}>
        🧙🏻‍♂️
      </div>
      <div className="frog" ref={frog.ref}>
        🐸
      </div>
      <div className="moon" ref={moon.ref}>
        🌚
      </div>
    </div>
  );
}

export default SpinKnight;
