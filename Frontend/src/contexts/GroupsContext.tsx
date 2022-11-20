import React, { createContext } from "react";
import { Group } from "../interfaces";
import { useGroups } from "./hooks";

interface Props {
  children: React.ReactNode;
}

export interface ContextValues {
  groups: Group[];
  setGroups: React.Dispatch<React.SetStateAction<Group[]>>;
}

const initialValues = {
  groups: [],
  setGroups: () => {},
};

const GroupsContext = createContext<ContextValues>(initialValues);

const GroupsProvider: React.FC<Props> = ({ children }) => {
  const { groups, setGroups } = useGroups(initialValues as ContextValues);

  return (
    <GroupsContext.Provider value={{ groups, setGroups } as ContextValues}>
      {children}
    </GroupsContext.Provider>
  );
};

export { GroupsContext, GroupsProvider };
