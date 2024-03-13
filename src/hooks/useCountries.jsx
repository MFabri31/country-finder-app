import { useState, useEffect } from "react";
import {
  getAllCountries,
  getCountriesByRegion,
  getCountryBySearch,
} from "../services/countries";

export const useCountries = ({ searchValue }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(null);

  const getCountries = async () => {
    try {
      setLoading(true);
      const countries = await getAllCountries();
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

  const filterCountriesByRegion = async () => {
    try {
      setLoading(true);
      const countries = await getCountriesByRegion({ searchValue });
      setCountries(countries);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  // useEffect(() => {
  //   filterCountriesByRegion();
  // }, []);

  return {
    countries,
    loading,
    getCountry,
  };
};
