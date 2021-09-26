import React from "react";
import ContactForm from './ContactForm';
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
    <Box id={props.id}>
      <Text fontSize="2rem" fontWeight="bold" p="2rem">
        Contact me
      </Text>
      <Box>
        <ContactForm></ContactForm>
      </Box>
    </Box>
  );
};

export default Contact;
