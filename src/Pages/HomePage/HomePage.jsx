import { SearchForm } from "../../components/SearchForm/SearchForm";
import { SimpleGrid } from "@chakra-ui/react";
import { useSearchForm } from "../../hooks/useSearchForm";
import { useCountries } from "../../hooks/useCountries";
import { Loader } from "../../components/Loader/Loader";
import { CountryCard } from "../../components/CountryCard/CountryCard";

export const HomePage = () => {
  const { searchValue, getFormValue, getSelectValue } = useSearchForm();

  const { countries, loading, getCountry } = useCountries();

  const countryList = countries?.map((country) => (
    <CountryCard key={country.id} {...country} />
  ));
  return (
    <>
      <SearchForm
        searchValue={searchValue}
        getFormValue={getFormValue}
        getSelectValue={getSelectValue}
        getCountry={getCountry}
      />

      {loading && <Loader />}

      <SimpleGrid columns={{ md: "4" }} gap={10}>
        {countryList}
      </SimpleGrid>
    </>
  );
};
