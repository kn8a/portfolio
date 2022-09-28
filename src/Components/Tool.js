import React from 'react'
import { Text, Image, Flex } from '@chakra-ui/react'

function Tool(props) {
    const tool = props.tool
  return (
    <Flex alignItems={'flex-end'} textAlign={'end'} gap={2} shadow={'base'} px={4} py={2} rounded={20} flexWrap={'wrap'} 
    bg="gray.50"
        _dark={{ bg: "gray.900" }}
    >
        <Image
        boxSize={'44px'}
        src={tool.img}
        >
        </Image>
        <Text  fontSize={'1.1rem'}>{tool.name}</Text>
    </Flex>
  )
}

export default Tool