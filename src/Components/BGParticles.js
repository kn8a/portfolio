import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function BGParticles() {
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        interactivity: {
          events: {
            onDiv: [
              {
                enable: true,
                selectors: '.bubble-circle-div',
                mode: 'bubble',
                type: 'circle',
              },
              {
                enable: true,
                selectors: '.repulse-circle-div',
                mode: 'repulse',
                type: 'circle',
              },
              {
                enable: true,
                selectors: '.bubble-rectangle-div',
                mode: 'bubble',
                type: 'rectangle',
              },
              {
                enable: true,
                selectors: '.repulse-rectangle-div',
                mode: 'repulse',
                type: 'rectangle',
              },
            ],
            onClick: { enable: true, mode: ['push'] },
            onHover: {
              enable: true,
              mode: ['repulse', 'bubble'],
            },
            resize: false,
          },
          modes: {
            push: { quantity: 4, radius: 50 },
            repulse: { distance: 100, duration: 0.4 },
            grab: {
              distance: 200,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 8,
              duration: 2,
              opacity: 0.3,
            },
          },
        },
        particles: {
          color: { value: '#808080' },
          move: {
            bounce: false,
            direction: 'none',
            enable: true,
            outModes: 'out',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 100,
            max: 100,
          },
          opacity: {
            value: 0.3,
          },
          links: {
            enable: true,
            distance: 160,
            color: { value: '#808080' },
            opacity: 0.3,
          },
          size: {
            value: 1.5,
          },
        },
      }}
    />
  );
}

export default BGParticles;
