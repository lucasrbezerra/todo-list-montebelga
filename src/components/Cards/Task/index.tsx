import { Task } from "../../../interfaces";

interface ICardTask {
  task: Task;
}

export const CardTask: React.FC<ICardTask> = ({ task }) => {
  return <h1>Card Task</h1>;
};
