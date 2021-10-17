import React from "react";
import { Box, Link } from "@chakra-ui/react";

const SidebarNavIcon = (props) => {
  return (
    <div>
      <Box
        borderTop="1px"
        borderBottom="1px"
        borderColor="gray.200"
        width="100%"
        height="50px"
        _hover={{
            background: "rgba(153,153,153,1)",
            color: "teal.500",
          }}
      >
        <Link href={props.link}>
          <img src={props.icon} style={{ width: "100%", height: "100%" }} />
        </Link>
      </Box>
    </div>
  );
};

export default SidebarNavIcon;
