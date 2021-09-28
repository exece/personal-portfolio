import React from "react";
import ProjectCard from "./ProjectCard";

import {
  Flex,
  Text,
  Button,
  Box,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import bath_bomb from '../../assets/project_images/bathbombs_landing.jpg';

const Projects = (props) => {
  return (
    <Box id={props.id} backgroundColor="white" py="5rem">
      <Text fontSize="2rem" fontWeight="bold" p="2rem">
        Some Projects
      </Text>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        rowGap="5rem"
        columnGap="2rem"
        pb="10rem"
      >
        <GridItem><ProjectCard title="Bath Bombs" image={bath_bomb} /></GridItem>
        <GridItem><ProjectCard title="Bath Bombs" image={bath_bomb} /></GridItem>
        <GridItem><ProjectCard title="Bath Bombs" image={bath_bomb} /></GridItem>
        <GridItem><ProjectCard title="Bath Bombs" image={bath_bomb} /></GridItem>
        <GridItem><ProjectCard title="Bath Bombs" image={bath_bomb} /></GridItem>
        <GridItem><ProjectCard title="Bath Bombs" image={bath_bomb} /></GridItem>

      </Grid>
    </Box>
  );
};

export default Projects;
