const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    const countries = await response.json();

    return countries;
  } catch (error) {
    console.log(error);
  }
};

export const getCountryBySearch = async ({ searchValue }) => {
  try {
    const response = await fetch(`${BASE_URL}/${searchValue}`);
    const country = await response.json();

    return country;
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
