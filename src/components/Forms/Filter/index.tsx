import React, { useEffect, useState } from "react";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "styled-components";
import { FormContent, Title, Text, WrapperButtons } from "./styles";
import { Theme } from "../../../themes";
import { Button, DateRange } from "../../../components";

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

  const [hasFinished, setHasFineshed] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [selectDate, setSelectDate] = useState({ startDate: "", endDate: "" });

  const handleFilters = () => {
    console.log("filters: ", {
      hasFinished,
      inProgress,
      selectDate,
    });
  };

  const handleChangeDate = (startDate: string, endDate: string) => {
    setSelectDate({
      startDate,
      endDate,
    });
  };

  const CustomCheckbox = styled(Checkbox)({
    "&.Mui-checked": {
      color: `${theme.colors.wine} !important`,
    },
    ".css-i4bv87-MuiSvgIcon-root": {
      fill: `${theme.colors.wine} !important`,
    },
  });

  return (
    <FormContent>
      <Title>Status</Title>
      <FormGroup>
        <FormControlLabel
          control={
            <CustomCheckbox
              color="primary"
              value={hasFinished}
              checked={hasFinished}
              onChange={() => setHasFineshed(!hasFinished)}
            />
          }
          label={<Text>Tarefas concluídas</Text>}
        />
        <FormControlLabel
          control={
            <CustomCheckbox
              color="primary"
              value={inProgress}
              onChange={() => setInProgress(!inProgress)}
            />
          }
          label={<Text>Tarefas em andamento</Text>}
        />
      </FormGroup>
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
