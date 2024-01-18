import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const asciiText = [
  '                  ###########',
  '                  ################',
  '                  ###################',
  '                 #####################  #',
  '              #########################  ##',
  '            ############################  ###',
  '           ######   #####################  ####',
  '          ######   #######################  #####',
  '       ###################################  ######',
  '     #####################################  #######',
  '  ########################################  ########',
  '#########################################  #########',
  '##  ####################################  ##########',
  '########################## ############  ##########',
  '############              ############  ###########',
  ' #########             ##############  ###########',
  '   ####              ###############  ###########',
  '                  #################  ###########',
  '                ##################  ###########',
  '             ###################  ############',
  '           ###################  #############',
  '         ###################  ##############',
  '        ##################  ################',
  '       ##################  ##################',
  '      ##################  ####################',
  '      ################  #######################',
  '      ###############  ########################',
  '       ############## ##########################',
  '       ############## ##########################',
  '        #######################################',
  '          ####################################',
  '           ##################################',
  '            ################################',
  '        ##        ####################        ##',
  '    ############                        ##########',
  '   ################################################',
  '   ################################################',
  '   ################################################',
  '      ##########################################',
  '           ################################',
];

const searchString = '#';
const replacements = ['.', ':', ';', 'o', '8', 'o']; // Replace with your desired replacements

const AsciiArt = () => {
  const asciiLines = asciiText;

  const regex = new RegExp(searchString, 'g');
  const replacedLines = asciiLines.map(line =>
    line.replace(regex, replacements[0])
  );

  const [knightText, setKnightText] = useState(replacedLines.join('\n'));
  // const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      // setOffset(window.scrollY);

      let replacementIndex = 0;

      if (window.scrollY > 134 && window.scrollY < 250) {
        replacementIndex = 1;
      } else if (window.scrollY > 249 && window.scrollY < 320) {
        replacementIndex = 2;
      } else if (window.scrollY > 319 && window.scrollY < 450) {
        replacementIndex = 3;
      } else if (window.scrollY > 449 && window.scrollY < 600) {
        replacementIndex = 4;
      } else if (window.scrollY > 599 && window.scrollY < 700) {
        replacementIndex = 3;
      } else if (window.scrollY > 699 && window.scrollY < 800) {
        replacementIndex = 2;
      } else if (window.scrollY > 799 && window.scrollY < 900) {
        replacementIndex = 2;
      }
      const regex = new RegExp(searchString, 'g');
      const replacedLines = asciiLines.map(line =>
        line.replace(regex, replacements[replacementIndex])
      );
      setKnightText(replacedLines.join('\n'));
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  });

  const asciiArtStyle = {
    lineHeight: '1', // Adjust the value to reduce or increase line spacing
  };

  return (
    <Text
      textColor={'gray'}
      justifyContent={'center'}
      justifyItems={'center'}
      fontSize={11}
    >
      <pre style={asciiArtStyle}>{knightText}</pre>
    </Text>
  );
};

export default AsciiArt;
