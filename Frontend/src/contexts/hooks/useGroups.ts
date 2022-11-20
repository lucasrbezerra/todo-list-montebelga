import { useState } from "react";
import { Group } from "../../interfaces";

interface ContextValues {
  groups: Group[];
  setGroups: React.Dispatch<React.SetStateAction<Group[]>>;
}

export const useGroups = (initialValues: ContextValues) => {
  const [groups, setGroups] = useState<Group[]>(initialValues.groups);

  return {
    groups,
    setGroups,
  };
};
