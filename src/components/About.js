import React from "react";
import { Flex, Text, Button, Box, Link, Grid } from "@chakra-ui/react";
import classes from "./About.module.css";
import { Link as ScrollLink } from "react-scroll";
import SkillBlock from "./SkillBlock";

const About = (props) => {
  return (
    <Box
      id={props.id}
      backgroundColor="#f2f2f4"
      useRef="about"
      h="100vh"
      px="5rem"
      className={classes.about}
    >
      <Flex
        height="5rem"
        justifyContent="center"
        alignItems="center"
        pt="8rem"
        pb="3rem"
      >
        <Text fontSize="2rem" fontWeight="bold">
          Who am I?
        </Text>
      </Flex>
      <Grid
        templateColumns={["repeat(2, 1fr)}"]}
        gap="4rem"
      >
        <Box px="2rem">
          <Text fontSize="1.5rem" fontWeight="bold" textAlign="start">
            Hello!
          </Text>
          <Text fontSize="1rem" textAlign="start">
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
          <Flex flexDir="row" justifyContent="start" w="100%">
            <ScrollLink to="contact" spy={true} smooth={true} isDynamic={true} w="100%">
              <Button mt={4} w="100%" colorScheme="teal" type="submit">
                Contact
              </Button>
            </ScrollLink>
          </Flex>
        </Box>
        <Box>
          <Text fontSize="1.5rem" fontWeight="bold" textAlign="start">
            Skills!
          </Text>
          <Flex flexWrap="wrap" w="80%">
            <SkillBlock skill={"HTML"} />
            <SkillBlock skill={"CSS"} />
            <SkillBlock skill={"React"} />
            <SkillBlock skill={"Flask"} />
            <SkillBlock skill={"SASS"} />
            <SkillBlock skill={"SQL"} />
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default About;
