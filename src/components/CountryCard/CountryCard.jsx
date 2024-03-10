import { Card, Image, CardBody, Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CountryCard = ({ name, flags, population, region, capital }) => {
  return (
    <Link to={`country/${name.common}`}>
      <Card mb="1rem" maxW="auto" shadow="md" borderRadius="8px">
        <Image src={flags.svg} borderTopRadius="8px" alt={flags.alt} />
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
