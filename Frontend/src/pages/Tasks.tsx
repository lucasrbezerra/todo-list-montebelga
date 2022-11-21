import { useContext, useEffect, useState } from "react";
import { Collapse, Grid } from "@mui/material";
import { CardTask, Main, Toolbar } from "../components";
import { TransitionGroup } from "react-transition-group";
import { getTasks } from "../api";
import { TasksContext } from "../contexts";

export function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [input, setInput] = useState<string>("");

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

  const onSearch = (search: string) => {
    setInput(search);
  };

  const filtered_tasks =
    input.length > 0
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(input.toLowerCase())
        )
      : tasks;

  return (
    <>
      <Toolbar
        title="Lista de tarefas"
        onSearch={onSearch}
        hiddenFilters={false}
      />
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
