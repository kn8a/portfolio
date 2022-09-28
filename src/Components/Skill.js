import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Skill(props) {
    const skill = props.skill
  return (
    <Flex alignItems={'center'} gap={2} shadow={'base'} px={4} py={2} rounded={20} flexWrap={'wrap'} 
    bg="gray.50"
        _dark={{ bg: "gray.900" }}
    >
        <Image
        boxSize={'32px'}
        src={skill.img}
        >
        </Image>
        <Text  fontSize={'1rem'}>{skill.name}</Text>
    </Flex>
  )
}

export default Skill