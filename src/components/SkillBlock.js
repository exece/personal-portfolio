import React from 'react'
import { Box } from "@chakra-ui/react";
import classes from './SkillBlock.module.css';

const SkillBlock = (props) => {
    return (
        <Box className={classes["skill-block"]} boxShadow="lg">
            {props.skill}
        </Box>
    )
}

export default SkillBlock
