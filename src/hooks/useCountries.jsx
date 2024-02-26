import { useState, useEffect } from "react";
import { getAllCountries } from "../services/countries";

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

  useEffect(() => {
    getCountries();
  }, []);

  return {
    countries,
    loading,
  };
};
