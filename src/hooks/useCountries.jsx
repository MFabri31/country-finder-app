import { useState, useEffect } from "react";
import {
  getInitialCountries,
  getCountriesByContinent,
  getCountryBySearch,
} from "../services/countries";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(null);

  const getCountries = async () => {
    try {
      setLoading(true);
      const countries = await getInitialCountries();
      setCountries(countries);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountry = async ({ searchValue }) => {
    try {
      setLoading(true);
      const countries = await getCountryBySearch({ searchValue });
      setCountries(countries);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filterCountriesByContinent = async ({ optionValue }) => {
    try {
      setLoading(true);
      const countries = await getCountriesByContinent({ optionValue });
      setCountries(countries);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return {
    countries,
    loading,
    getCountry,
    filterCountriesByContinent,
  };
};
