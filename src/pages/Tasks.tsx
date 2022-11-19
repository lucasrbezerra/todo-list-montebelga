import { useState } from "react";
import { Grid } from "@mui/material";
import { CardTask, Main, Toolbar } from "../components";
import { Task } from "../interfaces";

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Nome da Tarefa",
      limitTime: "2022-10-27T02:14:45.057Z",
      hasFinished: false,
      groupOwner: {
        title: "The Witcher 3",
      },
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
    },
    {
      id: 2,
      title: "Nome da Tarefa",
      limitTime: "2022-10-27T02:14:45.057Z",
      hasFinished: true,
      groupOwner: {
        title: "The Witcher 3",
      },
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
    },
    {
      id: 3,
      title: "Nome da Tarefa",
      limitTime: "2022-10-27T02:14:45.057Z",
      hasFinished: true,
      groupOwner: {
        title: "The Witcher 3",
      },
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
    },
    {
      id: 4,
      title: "Nome da Tarefa",
      limitTime: "2022-10-27T02:14:45.057Z",
      hasFinished: false,
      groupOwner: {
        title: "The Witcher 3",
      },
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
    },
  ]);
  return (
    <>
      <Toolbar title="Lista de tarefas" />
      <Main>
        <Grid container spacing={3}>
          {tasks.map((task, index) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
                <CardTask task={task} tasks={tasks} setTasks={setTasks} />
              </Grid>
            );
          })}
        </Grid>
      </Main>
    </>
  );
}
