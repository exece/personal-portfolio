import React, { Fragment } from "react";

import { Flex, Text, Button, Box, Link } from "@chakra-ui/react";

import classes from "./Nav.module.css";

import {Link as ScrollLink} from 'react-scroll'

const Nav = () => {
  return (
    <Flex flexDirection="row" justifyContent="center">
      <Box className={classes["nav-item"]} px="2rem">
        <Link><ScrollLink to="about" spy={true} smooth={true} isDynamic={true}>About</ScrollLink></Link>
      </Box>
      <Box className={classes["nav-item"]} px="2rem">
        <Link ><ScrollLink to="projects" spy={true} smooth={true} isDynamic={true}>Projects</ScrollLink></Link>
      </Box>
      <Box className={classes["nav-item"]} px="2rem">
        <Link><ScrollLink to="contact" spy={true} smooth={true} isDynamic={true} offset={100}>Contact</ScrollLink></Link>
      </Box>
    </Flex>
  );
};

export default Nav;
