import { useState } from "react";
import { Collapse, Grid } from "@mui/material";
import { CardTask, Main, Toolbar } from "../components";
import { Task } from "../interfaces";
import { TransitionGroup } from "react-transition-group";

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Andar",
      limitTime: "2022-10-27T02:14:45.057Z",
      hasFinished: false,
      GroupId: {
        title: "The Witcher 1",
      },
      createdAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
    },
    {
      id: 2,
      title: "Banhar",
      limitTime: "2022-10-27T02:14:45.057Z",
      hasFinished: true,
      GroupId: {
        title: "The Witcher 3",
      },
      createdAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
    },
    {
      id: 3,
      title: "Correr",
      limitTime: "2022-10-27T02:14:45.057Z",
      hasFinished: true,
      GroupId: {
        title: "The Witcher 3",
      },
      createdAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
    },
    {
      id: 4,
      title: "Deitar",
      limitTime: "2022-10-27T02:14:45.057Z",
      hasFinished: false,
      GroupId: {
        title: "The Witcher 3",
      },
      createdAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
    },
  ]);

  const [search, setSearch] = useState<string>("");

  const groupTransitionProps = {
    appear: false,
    enter: true,
    exit: true,
  };

  const onSearch = (value: string) => {
    setSearch(value);
  };

  const filtered_tasks =
    search.length > 0
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        )
      : tasks;

  return (
    <>
      <Toolbar title="Lista de tarefas" onSearch={onSearch} />
      <Main>
        <Grid container spacing={3}>
          <TransitionGroup {...groupTransitionProps} component={null}>
            {filtered_tasks.map((task, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={4}
                  key={index}
                  component={Collapse}
                >
                  <CardTask task={task} tasks={tasks} setTasks={setTasks} />
                </Grid>
              );
            })}
          </TransitionGroup>
        </Grid>
      </Main>
    </>
  );
}
