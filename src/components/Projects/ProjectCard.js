import React, { useState, Fragment } from "react";
import { render } from "react-dom";
import Card from "../UI/Card";
import {
  Flex,
  Text,
  Button,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";

import classes from "./ProjectCard.module.css";




const ProjectCard = ({ title, image, onClick }) => {
  return (
    <>
      <Box className={classes.project}>
        <Box className={classes["project-card"]}>
          <Card>
            <Flex flexDir="column" justifyContent="center" alignItems="center">
              <Box>
                <Image
                  src={image}
                  alt="project image"
                  boxSize="10rem"
                  objectFit="cover"
                />
              </Box>
              <Text fontWeight="bold">{title}</Text>
            </Flex>
          </Card>
        </Box>
        <Box className={classes["project-overlay"]}>
          <Link
            className={classes["project-overlay__link"]}
            color="white"
            textDecor="none"
            onClick={onClick}
          >
            Learn More
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
