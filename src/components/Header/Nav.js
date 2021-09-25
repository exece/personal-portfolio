import React, { Fragment } from "react";

import { Flex, Text, Button, Box, Link } from "@chakra-ui/react";

import classes from "./Nav.module.css";

import {Link as ScrollLink} from 'react-scroll'

const Nav = () => {
  return (
    <Flex flexDirection="row" justifyContent="center">
      <Box className={classes["nav-item"]} px="2rem">
        <Link><ScrollLink to="about" spy={true} smooth={true}>About</ScrollLink></Link>
      </Box>
      <Box className={classes["nav-item"]} px="2rem">
        <Link ><ScrollLink to="about" spy={true} smooth={true}>Projects</ScrollLink></Link>
      </Box>
      <Box className={classes["nav-item"]} px="2rem">
        <Link><ScrollLink to="about" spy={true} smooth={true}>Contact</ScrollLink></Link>
      </Box>
    </Flex>
  );
};

export default Nav;
