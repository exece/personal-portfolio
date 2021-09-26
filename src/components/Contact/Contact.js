import React from "react";
import ContactForm from './ContactForm';
import Card from '../UI/Card';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Text
} from "@chakra-ui/react"

const Contact = (props) => {
  return (
    <Box id={props.id} width="100%">
      <Text fontSize="2rem" fontWeight="bold" p="2rem">
        Contact me
      </Text>
      <Flex width="100%" justifyContent="center">
        <Box width="50%" p="5">
          <Card>
            <ContactForm></ContactForm>
          </Card>
        </Box>
      </Flex>
      
    </Box>
  );
};

export default Contact;
