import React from "react";
import ProjectCard from './ProjectCard';
import {
  Flex,
  Text,
  Button,
  Box,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Projects = (props) => {
  return (
    <Box id={props.id} backgroundColor="white" py="5rem">
      <Text fontSize="2rem" fontWeight="bold" p="2rem">
        Some Projects
      </Text>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap="4rem"
        pb="10rem"
      >
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>

        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>

        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>
        <GridItem><ProjectCard /></GridItem>

      </Grid>
    </Box>
  );
};

export default Projects;
