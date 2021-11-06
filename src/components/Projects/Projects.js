import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import {
  Flex,
  Text,
  Button,
  Box,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import bath_bomb from "../../assets/project_images/bathbombs_landing.jpg";

const Projects = (props) => {
  //Bath Bombs

  return (
    <Box id={props.id} backgroundColor="white" py="5rem" px="3rem">
      <Text fontSize="2rem" fontWeight="bold" p="2rem">
        Some Projects
      </Text>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        rowGap="3rem"
        columnGap="1rem"
        pb="5rem"
      >
        <GridItem>
          <ProjectCard
            title="Bath Bombs"
            image={bath_bomb}
            onClick={props.onClick}
            onClose={props.onClose}
            isOpen={props.isOpen}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test0"}
            image={bath_bomb}
            onClick={props.onClick}
            onClose={props.onClose}
            isOpen={props.isOpen}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test1"}
            image={bath_bomb}
            onClick={props.onClick}
            onClose={props.onClose}
            isOpen={props.isOpen}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test2"}
            image={bath_bomb}
            onClick={props.onClick}
            onClose={props.onClose}
            isOpen={props.isOpen}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test3"}
            image={bath_bomb}
            onClick={props.onClick}
            onClose={props.onClose}
            isOpen={props.isOpen}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test4"}
            image={bath_bomb}
            onClick={props.onClick}
            onClose={props.onClose}
            isOpen={props.isOpen}
          />
        </GridItem>
      </Grid>
      
      
    </Box>
  ); //<ProjectModal isOpen={props.isOpen} onClose={props.onClose} title={"title"}/>
};

export default Projects;
