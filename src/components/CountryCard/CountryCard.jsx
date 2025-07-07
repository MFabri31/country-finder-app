import { Card, Image, CardBody, Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CountryCard = ({ name, flags, population, region, capital }) => {
  return (
    <Link to={`country/${name.common}`}>
      <Card
        mb="1rem"
        w="18rem"
        shadow="md"
        borderRadius="8px"
        overflow="hidden"
      >
        <Box
          w="100%"
          h="12rem"
          bg="gray.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={flags.svg}
            borderTopRadius="8px"
            alt={flags.alt}
            objectFit="contain"
          />
        </Box>
        <CardBody>
          <Heading as="h3" size="md" mb="1rem">
            {name.common}
          </Heading>
          <Text fontWeight="semiBold">
            Population: {""}
            <Box as="span" fontWeight="light">
              {population}
            </Box>
          </Text>
          <Text fontWeight="semiBold">
            Capital: {""}
            <Box as="span" fontWeight="light">
              {capital}
            </Box>
          </Text>
          <Text fontWeight="semiBold">
            Region:{" "}
            <Box as="span" fontWeight="light">
              {region}
            </Box>
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};
