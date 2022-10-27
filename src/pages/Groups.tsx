import { Grid } from "@mui/material";
import { useState } from "react";
import { Main, Toolbar } from "../components";
import { CardGroup } from "../components/Cards";
import { Group } from "../interfaces";

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      title: "Compras",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          groupOwner: 1,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          groupOwner: 1,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
    },
    {
      id: 2,
      title: "Compras",
      createAt: "2022-10-27T02:14:45.057Z",
      updatedAt: "2022-10-27T02:14:45.057Z",
      tasks: [
        {
          id: 1,
          title: "Jogos & Dungeons",
          hasFinished: false,
          groupOwner: 2,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          groupOwner: 2,
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
          groupOwner: 3,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          groupOwner: 3,
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
          groupOwner: 3,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          groupOwner: 3,
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
          groupOwner: 3,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          groupOwner: 3,
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
          groupOwner: 3,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          groupOwner: 3,
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
          groupOwner: 3,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
        {
          id: 2,
          title: "Jogos & Games",
          hasFinished: false,
          groupOwner: 3,
          createAt: "2022-10-27T02:14:45.057Z",
          updatedAt: "2022-10-27T02:14:45.057Z",
        },
      ],
    },
  ]);

  return (
    <>
      <Toolbar />
      <Main>
        <Grid container spacing={3}>
          {groups.map((group, index) => {
            return (
              <Grid item xs={4}>
                <CardGroup group={group} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Main>
    </>
  );
}
