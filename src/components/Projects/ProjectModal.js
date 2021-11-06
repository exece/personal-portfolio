import React from "react";
import Modal from "../UI/Modal";
import { Flex, Text, Button, Box, Link, Image } from "@chakra-ui/react";


const ProjectModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <Box>
          <Text>{props.title}</Text>
        </Box>
      </Modal>
  
    </>
    
  );
};

export default ProjectModal;
