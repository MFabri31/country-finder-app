import { useEffect, useState } from "react";
import { SimpleGrid, Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MyButton } from "../../components/Button/Button";
import { getCountryByName } from "../../services/countries";

const CountryPage = () => {
  const [country, setCountry] = useState({});

  const params = useParams();

  const getCountry = async () => {
    try {
      const country = await getCountryByName({ name: params.name });
      setCountry(country[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  const languages =
    country.languages &&
    Object.keys(country.languages).map((country) => country);

  return (
    <>
      <Link to="/">
        <MyButton />
      </Link>
      <SimpleGrid columns={{ md: "2" }} gap={20}>
        <Box>
          <Image src={country.flags?.svg} />
        </Box>
        <Flex
          flex={{ md: "row" }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Box>
            <Heading mb="1rem">{country.name?.common}</Heading>
            <Text fontWeight="semibold">
              Native name:{" "}
              <Box as="span" fontWeight="light">
                ---
              </Box>
            </Text>
            <Text fontWeight="semibold">
              Population: {""}
              <Box as="span" fontWeight="light">
                {country.population}
              </Box>
            </Text>
            <Text fontWeight="semibold">
              Region: {""}
              <Box as="span" fontWeight="light">
                {country.region}
              </Box>
            </Text>
            <Text fontWeight="semibold">
              Sub region: {""}
              <Box as="span" fontWeight="light">
                {country.subregion}
              </Box>
            </Text>
            <Text fontWeight="semibold">
              Capital: {""}
              <Box as="span" fontWeight="light">
                {country.capital?.map((country) => country)}
              </Box>
            </Text>
          </Box>
          <Box>
            <Text fontWeight="semibold">
              Top Level Domain:
              <Box as="span" fontWeight="light">
                ---
              </Box>
            </Text>
            <Text fontWeight="semibold">
              Currencies:{" "}
              <Box as="span" fontWeight="light">
                ---
              </Box>
            </Text>
            <Text fontWeight="semibold">
              Languages: {""}
              <Box as="span" fontWeight="light">
                {languages}
              </Box>
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default CountryPage;
