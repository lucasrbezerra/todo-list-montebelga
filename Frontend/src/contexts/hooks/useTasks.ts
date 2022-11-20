import { useState } from "react";
import { Task } from "../../interfaces";

interface ContextValues {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const useTasks = (initialValues: ContextValues) => {
  const [tasks, setTasks] = useState<Task[]>(initialValues.tasks);

  return {
    tasks,
    setTasks,
  };
};
