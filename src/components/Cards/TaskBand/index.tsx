import React from "react";
import { Task } from "../../../interfaces";
import { Content, Title } from "./styles";

interface ITaskBand {
  task: Task;
}

export const TaskBand: React.FC<ITaskBand> = ({ task }) => {
  return (
    <Content>
      <Title>{task.title}</Title>
    </Content>
  );
};
