import React from "react";
import { Box, Link } from "@chakra-ui/react";

const SidebarNavIcon = (props) => {
  return (
    <div>
      <Link href={props.link} target="_blank">
        <Box
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.200"
          width="100%"
          height="50px"
          _hover={{
            background: "rgba(153,153,153,1)",
          }}
        >
          <img src={props.icon} style={{ width: "100%", height: "100%" }} />
        </Box>
      </Link>
    </div>
  );
};

export default SidebarNavIcon;
