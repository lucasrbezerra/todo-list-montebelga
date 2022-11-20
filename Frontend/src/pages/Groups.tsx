import { useState, useContext, useEffect } from "react";
import { Grid, Collapse } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { Main, Toolbar } from "../components";
import { CardGroup } from "../components/Cards";
import { GroupsContext } from "../contexts";
import { getGroups } from "../api";
// import { Group } from "../interfaces";

export function Groups() {
  const { groups, setGroups } = useContext(GroupsContext);
  const [search, setSearch] = useState<string>("");

  const getAllGroups = async () => {
    try {
      const { data } = await getGroups();
      setGroups(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  const groupTransitionProps = {
    appear: false,
    enter: true,
    exit: true,
  };

  const onSearch = (value: string) => {
    setSearch(value);
  };

  const filtered_groups =
    search.length > 0
      ? groups.filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        )
      : groups;

  return (
    <>
      <Toolbar title="Lista de grupos" onSearch={onSearch} />
      <Main>
        <Grid container spacing={3}>
          <TransitionGroup {...groupTransitionProps} component={null}>
            {filtered_groups.map((group, index) => {
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
                  <CardGroup
                    group={group}
                    groups={groups}
                    setGroups={setGroups}
                  />
                </Grid>
              );
            })}
          </TransitionGroup>
        </Grid>
      </Main>
    </>
  );
}
