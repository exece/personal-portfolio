import React from "react";
import {
  FormControl,
  Textarea,
  FormLabel,
  Button,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Text,
  Input,
  Link,
  VStack,
  Image,
  Grid,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="black">
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        color="white"
      >
        <VStack p="2rem" justify="center" align="center">
          <Text fontSize="1.6rem" fontWeight="bold">
            Ryan Evans-Schwede
          </Text>
          <Text fontSize="1rem">
            Ullamco mollit esse est occaecat pariatur incididunt amet veniam
            enim f ugiat pariatur ipsum. Ex fugiat cupidatat do irure ut do
            officia nulla consequat es se proident. Elit in nostrud occaecat
            mollit veniam exercitation laboris pariatur nisi. .
          </Text>
        </VStack>
        <VStack p="2rem">
          <Text fontSize="1.6rem" fontWeight="bold">
            Socials
          </Text>
          <Link to="/https://github.com/exece">Github</Link>
          <Link to="/https://www.linkedin.com/in/ryan-evans-schwede/">LinkedIn</Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="white"
          w="100%"
          borderTop="1px solid white"
          p="0.8rem"
        >
          © Copyright Ryan Evans-Schwede
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
