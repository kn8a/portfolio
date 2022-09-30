import { Fragment, useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
//  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  Select,
  useToast,
} from '@chakra-ui/react';

//import { GoLocation } from 'react-icons/go';
//import { BsPhone } from 'react-icons/bs';
//import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const contactOptions = [
  // {
  //   label: 'PHONE NUMBER',
  //   value: '+1 5589 55488 55',
  //   icon: BsPhone
  // },
  // {
  //   label: 'EMAIL',
  //   value: 'info@example.com',
  //   icon: HiOutlineMail
  // }
];

const Contact = () => {
  const [submittingForm, setSubmittingForm] = useState(false);
  const toast = useToast();

  const sendEmail = e => {
    setSubmittingForm(true);
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        result => {
          toast({
            description: 'Your message has been sent.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom',
          });
        },
        error => {
          toast({
            description: 'Message failed to submit, please retry.',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'bottom',
          });
        }
      );
    e.target.reset();
    setSubmittingForm(false);
  };

  return (
    <Container
      id={'contact'}
      maxW="7xl"
      p={{ base: 5, md: 10 }}
      mx="auto"
      marginTop={10}
    >
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading
            className="heading"
            mb={2}
            fontFamily={'font1'}
            fontWeight={400}
            fontSize={'xx-large'}
          >
            Contact me
          </Heading>
          <Text fontSize="md" textAlign="center">
            I will get back to you as quickly as possible.
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
                px={3}
              >
                <Icon as={option.icon} w={10} h={10} color="green.400" />
                <Text fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg="gray.50"
          _dark={{ bg: 'gray.900' }}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
          onSubmit={sendEmail}
        >
          <VStack spacing={4} w="100%">
            <Stack
              w="100%"
              spacing={3}
              direction={{ base: 'column', md: 'row' }}
            >
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <Input
                  name="name"
                  type="text"
                  placeholder="First, Last"
                  rounded="md"
                  bg={'white'}
                  _dark={{ bg: 'gray.800' }}
                  shadow={'inner'}
                  required
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Your Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="test@test.com"
                  rounded="md"
                  bg={'white'}
                  _dark={{ bg: 'gray.800' }}
                  shadow={'inner'}
                />
              </FormControl>
            </Stack>
            <FormControl id="purpose">
              <FormLabel>Purpose</FormLabel>
              <Select
                name="purpose"
                placeholder="Select option"
                bg={'white'}
                _dark={{ bg: 'gray.800' }}
                shadow={'inner'}
                required
              >
                <option value="hire">Hire for full/part time</option>
                <option value="freelance">Freelance work</option>
                <option value="startup">Join a startup</option>
                <option value="open-source">Open source project</option>
                <option value="recruiter">I am a recruiter</option>
              </Select>
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                size="lg"
                placeholder="Enter your message"
                rounded="md"
                bg={'white'}
                _dark={{ bg: 'gray.800' }}
                shadow={'inner'}
              />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              colorScheme={'green'}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
              type={'submit'}
              isLoading={submittingForm}
              loadingText="Submitting"
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Contact;
