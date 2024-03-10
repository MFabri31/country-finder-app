import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";

export const NavBar = () => {
  return (
    <Box py="2em" px={{ base: "1em", lg: "5.8em" }} shadow="md">
      <Layout>
        <Text fontSize="lg" fontWeight="extraBold">
          <Link to="/">Where in the world?</Link>
        </Text>
      </Layout>
    </Box>
  );
};
