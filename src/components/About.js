import React from "react";
import { Flex, Text, Button, Box, Link, Grid } from "@chakra-ui/react";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <Box
      id={props.id}
      backgroundColor="#f2f2f4"
      useRef="about"
      h="100vh"
      className={classes.about}
    >
      <Flex
        height="5rem"
        justifyContent="center"
        alignItems="center"
        pt="10rem"
        pb="1rem"
      >
        <Text fontSize="2rem" fontWeight="bold">
          Who am I?
        </Text>
      </Flex>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap="4rem"
      ></Grid>

      <Flex justifyContent="space-" alignItems="center" pb="1rem">
        <Box w="60%">
          <Text fontSize="1.5rem" fontWeight="bold">
            Hello!
          </Text>
          <Text fontSize="1rem">
            Reprehenderit ullamco dolore excepteur labore in culpa reprehenderit
            consequat cupidatat culpa v oluptate id enim. Anim minim deserunt ex
            velit non dolor quis. Exercitation nulla anim Lorem eu non proident
            enim ullam co ex consectetur est velit. atat culpa v oluptate id
            enim. Anim minim deserunt ex velit non dolor quis. Exercitation
            nulla anim Lorem eu non proident enim ullam co ex consectetur est
            velit. atat culpa v oluptate id enim. Anim minim deserunt ex velit
            non dolor quis. Exercitation nulla anim Lorem eu non proident enim
            ullam co ex consectetur est velit.
          </Text>
          <Button
            mt={4}
            w="30%"
            colorScheme="teal"
            type="submit"
            >
                Contact
            </Button>
        </Box>
        <Box w="40%">
          <Text fontSize="1.5rem" fontWeight="bold">
            Skills!
          </Text>
          <Text fontSize="1rem" w="50%">
            Skills lorem ipsem
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
