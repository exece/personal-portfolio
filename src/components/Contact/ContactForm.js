import React, {Fragment} from 'react'
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
    Input
  } from "@chakra-ui/react"

const ContactForm = () => {
    return (
        <Flex flexDirection="column" alignItems="center" justifyContent="center">        
            <FormControl id="first-name" isRequired size="lg">
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
            </FormControl>
            <FormControl id="last-name" isRequired size="lg">
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" />
            </FormControl>
            <FormControl id="email" isRequired size="lg">
                <FormLabel>Email</FormLabel>
                <Input placeholder="Email" />
            </FormControl>
            <FormControl id="body" isRequired size="lg">
                <FormLabel>Body</FormLabel>
                <Textarea placeholder="Body" />
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

        
        
    )
}

export default ContactForm
