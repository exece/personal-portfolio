import React, { Fragment } from "react";

import { Flex, Text, Button, Box, Link } from "@chakra-ui/react";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <Flex flexDirection="row" justifyContent="center">
      <Box className={classes["nav-item"]} px="2rem">
        <Link >About</Link>
      </Box>
      <Box className={classes["nav-item"]} px="2rem">
        <Link>Projects</Link>
      </Box>
      <Box className={classes["nav-item"]} px="2rem">
        <Link>Contact</Link>
      </Box>
    </Flex>
  );
};

export default Nav;
