import React from "react";
import { Flex, Text, Button, Box, Link } from "@chakra-ui/react";

const About = () => {
  return (
    <Box backgroundColor="#f2f2f4" useRef='about'>
      <Flex
        height="5rem"
        justifyContent="center"
        alignItems="center"
        pt="2rem"
        pb="1rem"
      >
        <Text fontSize="2rem" fontWeight="bold">
          Who am I?
        </Text>
      </Flex>
      <Flex
        height="10rem"
        justifyContent="center"
        alignItems="center"

        pb="1rem"
      >
        <Text fontSize="1rem" w="50%">
          Reprehenderit ullamco dolore excepteur labore in culpa reprehenderit consequat cupidatat culpa v
          oluptate id enim. Anim minim deserunt ex velit non dolor quis. Exercitation nulla anim Lorem eu non proident enim ullam
          co ex consectetur est velit.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
