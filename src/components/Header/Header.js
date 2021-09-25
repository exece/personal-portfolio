import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'
import Nav from "./Nav";
import { ClassNames } from "@emotion/react";

import classes from "./Header.module.css";

const header = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      position="relative"
      backgroundColor="orange"
      color="white"
      width="100%"
      height="95vh"
      backgroundColor="red"
      className={classes.header}
    >
      <Text
        position="absolute"
        bottom="45%"
        fontSize="3rem"
        fontWeight="bold"
        letterSpacing="2rem"
        textAlign="center"
      >     
        Rya
        <span style={{letterSpacing: "0px"}}>n</span>
      </Text>
      <Text
        position="absolute"
        bottom="38%"
        fontSize="2rem"
        fontWeight="bold"
        letterSpacing="1rem"
      >
        Evans-Schwed
        <span style={{letterSpacing: "0px"}}>e</span>
      </Text>
      <Box position="absolute" bottom="30%" width="100%">
        <Nav />
      </Box>
      <Box position="absolute" bottom="12%" width="100%">
          <ArrowDownIcon w={6} h={6} />
      </Box>
    </Flex>
  );
};

export default header;
