import { useState } from "react";
import { Task } from "../../interfaces";

interface ContextValues {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  checkTask: Boolean;
  setCheckTask: React.Dispatch<React.SetStateAction<Boolean>>;
}

export const useTasks = (initialValues: ContextValues) => {
  const [tasks, setTasks] = useState<Task[]>(initialValues.tasks);
  const [checkTask, setCheckTask] = useState<Boolean>(initialValues.checkTask);

  return {
    tasks,
    setTasks,
    checkTask,
    setCheckTask,
  };
};
