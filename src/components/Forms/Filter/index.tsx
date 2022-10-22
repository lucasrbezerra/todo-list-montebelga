import React, { useEffect, useState } from "react";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "styled-components";
import { FormContent, Title, Text } from "./styles";
import { Theme } from "../../../themes";
import { DateRange } from "../../../components";

interface IFormFilter {
  saveForm: boolean;
}

export const FormFilter: React.FC<IFormFilter> = ({ saveForm }) => {
  const theme = useTheme() as Theme;

  const [hasFinished, setHasFineshed] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [selectDate, setSelectDate] = useState({ startDate: "", endDate: "" });

  const handleChangeDate = (startDate: string, endDate: string) => {
    setSelectDate({
      startDate,
      endDate,
    });
  };

  useEffect(() => {
  }, [saveForm]);
  // useEffect(() => {
  //   // console.log("saveForm", saveForm);

  //   if (saveForm) {
  //     console.log("hasFinished: ", hasFinished);
  //     console.log("inProgress: ", inProgress);
  //     console.log("selectDate: ", selectDate);
  //   }
  // }, [saveForm]);

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
              checked={inProgress}
              onChange={() => setInProgress(!inProgress)}
            />
          }
          label={<Text>Tarefas em andamento</Text>}
        />
      </FormGroup>
      <Title>Período</Title>
      <DateRange onChange={handleChangeDate} />
    </FormContent>
  );
};
