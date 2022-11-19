import { useState } from "react";

interface ContextValues {
  filters: {};
  setFilters: React.Dispatch<React.SetStateAction<{}>>;
  save: boolean;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useFilter = (initialValues: ContextValues) => {
  const [filters, setFilters] = useState(initialValues.filters);
  const [save, setSave] = useState(initialValues.save);

  return {
    filters,
    setFilters,
    save,
    setSave,
  };
};
