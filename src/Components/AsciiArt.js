import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const asciiText = `
                  ###########                      
                  ################                 
                  ###################              
                 #####################  #          
              #########################  ##        
            ############################  ###      
           ######   #####################  ####    
          ######   #######################  #####   
       ###################################  ######  
     #####################################  ####### 
  #######################################  ######## 
########################################  #########
##  ####################################  ######### 
########################## ############  ######### 
############              ############  ########## 
 #########             ##############  ##########  
   ####              ###############  ###########  
                  #################  ###########   
                ##################  ############    
             ###################  #############     
           ###################  ##############      
         ###################  ##############       
        ##################  ################       
       ##################  ##################      
      ##################  ####################     
      ################  #######################    
      ###############  ########################    
       ############## ##########################   
       ############## ##########################   
        #######################################     
          ####################################       
           ##################################       
            ################################       
        ##        ####################        ##    
    ############                        ########## 
   ################################################
   ################################################
   ################################################
      ##########################################   
           ################################        
  `;

  const searchString = "#"
        const replacement = "."
        let regex = new RegExp(searchString, 'g')
        let replacedString = asciiText.replace(regex, replacement)

const AsciiArt = () => {
  const [knightText, setKnightText] = useState(replacedString)
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
      if (window.scrollY < 135) {
        const searchString = "#"
        const replacement = "."
        let regex = new RegExp(searchString, 'g')
        let replacedString = asciiText.replace(regex, replacement)
        setKnightText(replacedString)
        
    } 
    else if (window.scrollY > 134 && window.scrollY < 250) {
      const searchString = "#"
        const replacement = ":"
        let regex = new RegExp(searchString, 'g')
        let replacedString = asciiText.replace(regex, replacement)
        setKnightText(replacedString)
        
    } else if (window.scrollY > 249 && window.scrollY < 320) {
      const searchString = "#"
        const replacement = ";"
        let regex = new RegExp(searchString, 'g')
        let replacedString = asciiText.replace(regex, replacement)
        setKnightText(replacedString)
        
    }
    else if (window.scrollY > 319 && window.scrollY < 450) {
      const searchString = "#"
        const replacement = "o"
        let regex = new RegExp(searchString, 'g')
        let replacedString = asciiText.replace(regex, replacement)
        setKnightText(replacedString)
        
    } else if (window.scrollY > 449 && window.scrollY < 600) {
      const searchString = "#"
        const replacement = "8"
        let regex = new RegExp(searchString, 'g')
        let replacedString = asciiText.replace(regex, replacement)
        setKnightText(replacedString)
        
    } else if (window.scrollY > 599 && window.scrollY < 1000) {
      const searchString = "#"
        const replacement = "o"
        let regex = new RegExp(searchString, 'g')
        let replacedString = asciiText.replace(regex, replacement)
        setKnightText(replacedString)
        
    }

    }
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  

  console.log(offset);
  const asciiArtStyle = {
    lineHeight: '1', // Adjust the value to reduce or increase line spacing
  
  };

  
  

  const [text,setText] = useState(asciiText)
  

  return (
    <Text textColor={'gray'} justifyContent={'center'} justifyItems={'center'}  fontSize={11}>
        <pre style={asciiArtStyle}>
        
      {knightText}
    
    </pre>
    </Text>
    
  );
};

export default AsciiArt;