const BASE_URL = "https://restcountries.com/v3.1";

export const getInitialCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/region/america`);
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.log(error);
  }
};

export const getCountryBySearch = async ({ searchValue }) => {
  try {
    const response = await fetch(`${BASE_URL}/name/${searchValue}`);
    const country = await response.json();

    return country;
  } catch (error) {
    console.log(error);
  }
};

export const getCountriesByContinent = async ({ optionValue }) => {
  try {
    const response = await fetch(`${BASE_URL}/region/${optionValue}`);
    const countries = await response.json();

    return countries;
  } catch (error) {
    console.log(error);
  }
};

export const getCountryByName = async ({ name }) => {
  try {
    const response = await fetch(`${BASE_URL}/name/${name}`);
    const country = await response.json();
    return country;
  } catch (error) {
    console.log(error);
  }
};
