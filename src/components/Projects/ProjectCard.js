import React, { useState, Fragment } from "react";
import { render } from "react-dom";
import Card from "../UI/Card";
import { Flex, Text, Button, Box, Link, Image, VStack } from "@chakra-ui/react";

import classes from "./ProjectCard.module.css";
import ProjectModal from "./ProjectModal";

const ProjectCard = ( props ) => {
  return (
    <>
      <Box className={classes.project}>
        <Box className={classes["project-card"]}>
          <Card>
            <Flex flexDir="column" justifyContent="center" alignItems="center">
              <Box>
                <Image
                  src={props.image}
                  alt="project image"
                  boxSize="10rem"
                  objectFit="cover"
                />
              </Box>
              <Text fontWeight="bold">{props.title}</Text>
            </Flex>
          </Card>
        </Box>
        <Box className={classes["project-overlay"]}>
          <VStack>
            <Link
              className={classes["project-overlay__link"]}
              color="white"
              textDecor="none"
              href={props.weblink} isExternal
            >
              Website
            </Link>
            <Link
              className={classes["project-overlay__link"]}
              color="white"
              textDecor="none"
              href={props.gitlink} isExternal
            >
              Github
            </Link>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
