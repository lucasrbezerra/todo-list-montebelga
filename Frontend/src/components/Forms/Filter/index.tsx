import React, { useContext, useState } from "react";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useTheme } from "styled-components";
import { FormContent, Title, WrapperButtons } from "./styles";
import { Theme } from "../../../themes";
import { Button, DateRange } from "../../../components";
import { getQueryTasks } from "../../../api";
import { TasksContext } from "../../../contexts";

type Inputs = {
  example: string;
  exampleRequired: string;
};

interface IFormFilter {
  checked: boolean;
  setChecked: (value: boolean) => void;
}

export const FormFilter: React.FC<IFormFilter> = ({ checked, setChecked }) => {
  const theme = useTheme() as Theme;
  const { setTasks } = useContext(TasksContext);

  const [value, setValue] = React.useState("allTasks");
  const [selectDate, setSelectDate] = useState({
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
  });

  const handleFilters = async () => {
    const query = {
      hasFinished: value === "hasFinished",
      inProgress: value === "inProgress",
      allTasks: value === "allTasks",
      startDate: selectDate.startDate,
      endDate: selectDate.endDate,
    };
    const params = new URLSearchParams(query as any);
    try {
      const response = await getQueryTasks(params.toString());
      if (response.status === 200) {
        setTasks(response.data.data);
        setChecked(false);
      } else {
        console.error("error on get query tasks");
      }
    } catch (error) {
      console.error("error on get query tasks", error);
    }
  };

  const handleChangeDate = (startDate: string, endDate: string) => {
    setSelectDate({
      startDate,
      endDate,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormContent>
      <Title>Status</Title>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="allTasks"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
          style={{ color: theme.colors.darkWhite }}
        >
          <FormControlLabel
            value="allTasks"
            control={<Radio style={{ color: theme.colors.wine }} />}
            label="Todas as tarefas"
          />
          <FormControlLabel
            value="hasFinished"
            control={<Radio style={{ color: theme.colors.wine }} />}
            label="Tarefas concluidas"
          />
          <FormControlLabel
            value="inProgress"
            control={<Radio style={{ color: theme.colors.wine }} />}
            label="Tarefas em andamento"
          />
        </RadioGroup>
      </FormControl>
      <Title>Período</Title>
      <DateRange onChange={handleChangeDate} />
      <WrapperButtons>
        <Button onClick={() => setChecked(false)}>Cancelar</Button>
        <Button autoFocus onClick={handleFilters}>
          Salvar
        </Button>
      </WrapperButtons>
    </FormContent>
  );
};
