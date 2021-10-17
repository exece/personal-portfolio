import React from 'react';
import Modal from '../UI/Modal';
import { Flex, Text, Button, Box, Link, Image, Modal } from "@chakra-ui/react";

const ProjectModal = () => {
    return (
        <Modal onClose={props.onClose}>
            <Box>
                <Text>Hello World!</Text>
            </Box>

        </Modal>
    )
}

export default ProjectModal
