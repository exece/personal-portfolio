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
          height="40px"
          _hover={{
            background: "rgba(153,153,153,1)",
          }}
        >

            <img
              src={props.icon}
              style={{ width: "100%", height: "100%", filter: "invert(96%) sepia(100%) saturate(16%) hue-rotate(261deg) brightness(105%) contrast(104%)" }}
            />

        </Box>
      </Link>
    </div>
  );
};

export default SidebarNavIcon;
