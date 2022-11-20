import { useContext, useEffect, useState } from "react";
import { Collapse, Grid } from "@mui/material";
import { CardTask, Main, Toolbar } from "../components";
import { Task } from "../interfaces";
import { TransitionGroup } from "react-transition-group";
import { getTasks } from "../api";
import { TasksContext } from "../contexts";

export function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [search, setSearch] = useState<string>("");

  const getAllTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

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
