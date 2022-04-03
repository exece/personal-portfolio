import React, { useState, useEffect } from "react";
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
import food_order from "../../assets/project_images/food_order_landing.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  //Bath Bombs

  return (
    <Box id={props.id} backgroundColor="white" py="5rem" px="3rem" data-aos="fade-up">
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
            weblink={'www.website.com'}
            gitlink={'https://github.com/exece/bath-bombs'}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"Food Order"}
            image={food_order}
            weblink={'www.website.com'}
            gitlink={'https://github.com/exece/food-order-app'}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test1"}
            image={bath_bomb}
            weblink={'www.website.com'}
            gitlink={'www.github.com'}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test2"}
            image={bath_bomb}
            weblink={'www.website.com'}
            gitlink={'www.github.com'}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test3"}
            image={bath_bomb}
            weblink={'www.website.com'}
            gitlink={'www.github.com'}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            title={"test4"}
            image={bath_bomb}
            weblink={'www.website.com'}
            gitlink={'www.github.com'}
          />
        </GridItem>
      </Grid>
      
      
    </Box>
  ); //<ProjectModal isOpen={props.isOpen} onClose={props.onClose} title={"title"}/>
};

export default Projects;
