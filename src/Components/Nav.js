import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Image } from '@chakra-ui/react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Link,
  CloseButton,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../ColorModeSwitcher';

import knightWhite from '../assets/images/knight-white.svg';
import knightBlack from '../assets/images/knight-black.svg';

export default function Nav() {
  const logo = useColorModeValue(knightBlack, knightWhite);

  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        position={'fixed'}
        bg={bg}
        w="100vw"
        px={{
          base: 2,
          sm: 4,
        }}
        py={2}
        marginBottom={100}
        shadow="md"
        zIndex={1}
        borderBottom={'1px white solid'}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex alignItems="center">
            <AnchorLink href="#top" title="Kn8 Home Page">
              <Image src={logo} boxSize={'2rem'} />
            </AnchorLink>
            <AnchorLink href="#top" title="Kn8 Home Page">
              <Flex
                pl="2"
                fontSize={'xx-large'}
                fontWeight="600"
                alignSelf={'center'}
                alignItems={'center'}
                fontFamily={'font1'}
              >
                Kn8
              </Flex>
            </AnchorLink>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1} pr={4}>
            <HStack
              spacing={1}
              mr={0}
              color="brand.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <AnchorLink href="#about">
                <Button variant="ghost" fontSize={'large'} fontWeight={400}>
                  About
                </Button>
              </AnchorLink>
              <AnchorLink href="#projects">
                <Button variant="ghost" fontSize={'large'} fontWeight={400}>
                  Projects
                </Button>
              </AnchorLink>
              <AnchorLink href="#skills">
                <Button variant="ghost" fontSize={'large'} fontWeight={400}>
                  Skills
                </Button>
              </AnchorLink>
              <AnchorLink href="#contact">
                <Button variant="ghost" fontSize={'large'} fontWeight={400}>
                  Contact
                </Button>
              </AnchorLink>
              <Link href="https://kn8.hashnode.dev" isExternal>
                <Button variant="ghost" fontSize={'large'} fontWeight={400}>
                  Blog
                </Button>
              </Link>
            </HStack>
            <ColorModeSwitcher />
            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
              m={0}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={10}
                spacing={4}
                rounded="sm"
                shadow="sm"
                bg="gray.100"
                _dark={{ bg: 'gray.700' }}
              >
                <Flex justifyContent={'space-between'} mx="auto" width={'full'}>
                  <Flex alignItems="center">
                    <AnchorLink href="#top" title="Kn8 Home Page">
                      <Image src={logo} boxSize={'2rem'} />
                    </AnchorLink>
                    <AnchorLink href="#top" title="Kn8 Home Page">
                      <Flex
                        pl="2"
                        fontSize={'xx-large'}
                        fontWeight="600"
                        alignSelf={'center'}
                        alignItems={'center'}
                        fontFamily={'font1'}
                      >
                        Kn8
                      </Flex>
                    </AnchorLink>
                  </Flex>

                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                    size={'lg'}
                    alignSelf={'right'}
                  />
                </Flex>
                <AnchorLink href="#about">
                  <Button
                    w="full"
                    variant="ghost"
                    size={'lg'}
                    onClick={mobileNav.onClose}
                  >
                    About
                  </Button>
                </AnchorLink>
                <AnchorLink href="#projects">
                  <Button
                    w="full"
                    variant="ghost"
                    size={'lg'}
                    onClick={mobileNav.onClose}
                  >
                    Projects
                  </Button>
                </AnchorLink>
                <AnchorLink href="#skills">
                  <Button
                    w="full"
                    variant="ghost"
                    size={'lg'}
                    onClick={mobileNav.onClose}
                  >
                    Skills
                  </Button>
                </AnchorLink>
                <AnchorLink href="#contact">
                  <Button
                    w="full"
                    variant="ghost"
                    size={'lg'}
                    onClick={mobileNav.onClose}
                  >
                    Contact
                  </Button>
                </AnchorLink>
                <Link href="https://kn8.hashnode.dev" isExternal>
                  <Button
                    w="full"
                    variant="ghost"
                    size={'lg'}
                    onClick={mobileNav.onClose}
                  >
                    Blog
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
