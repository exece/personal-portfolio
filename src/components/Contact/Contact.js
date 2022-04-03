import React, {useEffect} from "react";
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
import classes from "./Contact.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <Box id={props.id} width="100%" backgroundColor="#f2f2f4" pb="5rem" data-aos="fade-left">
      <Text fontSize="2rem" fontWeight="bold" p="2rem">
        Contact me
      </Text>
      <Flex width="100%" justifyContent="center">
        <Box width="80%" p="5">
          <Card>
            <ContactForm></ContactForm>
          </Card>
        </Box>
      </Flex>
      
    </Box>
  );
};

export default Contact;
