import React, { createContext } from "react";
import { Task } from "../interfaces";
import { useTasks } from "./hooks";

interface Props {
  children: React.ReactNode;
}

export interface ContextValues {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  checkTask: Boolean;
  setCheckTask: React.Dispatch<React.SetStateAction<Boolean>>;
}

const initialValues = {
  tasks: [],
  setTasks: () => {},
  checkTask: false,
  setCheckTask: () => {},
};

const TasksContext = createContext<ContextValues>(initialValues);

const TasksProvider: React.FC<Props> = ({ children }) => {
  const { tasks, setTasks, checkTask, setCheckTask } = useTasks(
    initialValues as ContextValues
  );

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, checkTask, setCheckTask } as ContextValues}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
