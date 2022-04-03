import React, {useEffect} from "react";
import { Flex, Text, Button, Box, Link, Grid } from "@chakra-ui/react";
import classes from "./About.module.css";
import { Link as ScrollLink } from "react-scroll";
import SkillBlock from "./SkillBlock";

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

  return (
    <Box
      id={props.id}
      backgroundColor="#f2f2f4"
      useRef="about"
      px="5rem"
      pb="5rem"
      className={classes.about}
    >
      <Flex
        height="5rem"
        justifyContent="center"
        alignItems="center"
        pt="8rem"
        pb="3rem"
      >
        <Text fontSize="2rem" my='5rem' fontWeight="bold" data-aos="fade-left">
          Who am I?
        </Text>
      </Flex>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap="4rem"
      >
        <Box className={classes['about-section']} data-aos="fade-up">
          <Text fontSize="1.5rem" fontWeight="bold" textAlign="start" mb="1rem">
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
        <Box className={classes['about-section']} data-aos="fade-up">
          <Text fontSize="1.5rem" fontWeight="bold" textAlign="start" mb="1rem">
            My Skills
          </Text>
          <Flex flexWrap="wrap" w="100%">
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
