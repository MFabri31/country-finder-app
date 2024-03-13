import { useState } from "react";

export const useSearchForm = () => {
  const [searchValue, setSearchValue] = useState(null);

  const getFormValue = (evt) => setSearchValue(evt.target.value);

  const getSelectValue = (optionValue) => {
    if (optionValue === "") return;
    setSearchValue(`region/${optionValue}`);
  };

  return {
    searchValue,
    getFormValue,
    getSelectValue,
  };
};
