import { Box, Text, Button, useColorMode, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box py="2em" px={{ base: "1em", lg: "5.8em" }} shadow="md">
      <Layout>
        <Flex align="center" justify="space-between">
          <Text fontSize="lg" fontWeight="extraBold">
            <Link to="/">Where in the world?</Link>
          </Text>
          <Button onClick={toggleColorMode} bg="transparent" p="0">
            {colorMode === "light" ? (
              <MoonIcon boxSize={6} />
            ) : (
              <SunIcon boxSize={6} />
            )}
          </Button>
        </Flex>
      </Layout>
    </Box>
  );
};
