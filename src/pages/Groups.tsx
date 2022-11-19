import { useState } from "react";
import { Grid, Collapse } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { Main, Toolbar } from "../components";
import { CardGroup } from "../components/Cards";
import { Group } from "../interfaces";

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      title: "The Witcher 3",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 3,
          title: "Jogos & Games",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
    },
    {
      id: 2,
      title: "Bloons TD 2",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
    },
    {
      id: 3,
      title: "Red Dead Redemption",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
    },
    {
      id: 3,
      title: "Compras",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
    },
    {
      id: 3,
      title: "Compras",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
    },
    {
      id: 3,
      title: "Compras",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
    },
    {
      id: 3,
      title: "Compras",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          limitTime: "2022-10-27T02:14:45.057Z",
          groupOwner: {
            title: "The Witcher 3",
          },
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
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
