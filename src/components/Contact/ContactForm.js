import React, { Fragment } from "react";
import {
  FormControl,
  Textarea,
  FormLabel,
  Button,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";

import emailjs from "emailjs-com";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d5fy53v",
        "template_p7nocue",
        e.target, //e.target?
        "user_nwd1nVY8NsxFEHXJZaw7T"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }

  return (
    <form onSubmit={sendEmail}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <FormControl id="first-name" isRequired size="lg">
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" name="first_name"/>
        </FormControl>
        <FormControl id="last-name" isRequired size="lg">
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Last Name" name="last_name"/>
        </FormControl>
        <FormControl id="email" isRequired size="lg">
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" name="email"/>
        </FormControl>
        <FormControl id="body" isRequired size="lg">
          <FormLabel>Body</FormLabel>
          <Textarea placeholder="Body" name="message"/>
        </FormControl>
        <Button
          mt={4}
          w="30%"
          colorScheme="teal"
          type="submit"
          alignSelf="start"
          size="lg"
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default ContactForm;
