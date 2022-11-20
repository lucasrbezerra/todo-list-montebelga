import React, { createContext } from "react";
import { Task } from "../interfaces";
import { useTasks } from "./hooks";

interface Props {
  children: React.ReactNode;
}

export interface ContextValues {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const initialValues = {
  tasks: [],
  setTasks: () => {},
};

const TasksContext = createContext<ContextValues>(initialValues);

const TasksProvider: React.FC<Props> = ({ children }) => {
  const { tasks, setTasks } = useTasks(initialValues as ContextValues);

  return (
    <TasksContext.Provider value={{ tasks, setTasks } as ContextValues}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
