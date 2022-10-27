import React, { createContext } from "react";
import { useFilter } from "./hooks";

interface Props {
  children: React.ReactNode;
}

export interface ContextValues {
  filters: {};
  setFilters: React.Dispatch<React.SetStateAction<{}>>;
  save: boolean;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
}
const initialValues = {
  filters: {},
  save: false,
};

const FilterContext = createContext(initialValues);

const FilterProvider: React.FC<Props> = ({ children }) => {
  const { filters, setFilters, save, setSave } = useFilter(
    initialValues as ContextValues
  );

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, save, setSave } as ContextValues}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
