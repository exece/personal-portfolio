import React from "react";
import { Flex, Text, Button, Box, Link, Grid } from "@chakra-ui/react";
import { height } from "@mui/system";

import SidebarNavIcon from "./SidebarNavIcon";

import resume_icon from "../assets/resume-60.png";
import github_icon from "../assets/github-48.svg";
import linkedin_icon from "../assets/linkedin-48.svg";

import resume from "../assets/TESTPDF.pdf";

const Sidebar = () => {
  return (
    <div>
      <Box
        position="fixed"
        width="50px"
        backgroundColor="rgba(153,153,153,.6)"
        left="0"
        bottom="50%"
        zIndex="5"
        borderRight="1px"
        borderColor="gray.200"
      >
        <Flex flexDir="column">
          <SidebarNavIcon icon={resume_icon} link={resume} />
          <SidebarNavIcon icon={github_icon} link={"https://github.com/exece"} />
          <SidebarNavIcon icon={linkedin_icon} link={"https://www.linkedin.com/in/ryan-evans-schwede/"} />
        </Flex>
      </Box>
    </div>
  );
};

export default Sidebar;
