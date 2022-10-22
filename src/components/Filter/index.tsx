import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Modal } from "../../components";
import { Text, Title } from "./styles";
import { FormControlLabel, FormGroup, styled} from "@mui/material";
import { useTheme } from "styled-components";
import { Theme } from "../../themes";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface IFilter {
  checked: boolean;
  setChecked: (value: boolean) => void;
}



export const Filter: React.FC<IFilter> = ({ checked, setChecked }) => {
  const theme = useTheme() as Theme;
  
  const CustomCheckbox = styled(Checkbox)({

    '&.Mui-checked': {
      color: `${theme.colors.wine} !important`,
    },
    '&.MuiCheckbox-root': {
      color: `${theme.colors.wine} !important`,
    },
    '&.MuiCheckbox-colorPrimary': {
      color: `${theme.colors.wine} !important`,
    },
  
  })

  return (
    <Modal
      checked={checked}
      setChecked={setChecked}
      title={"Filtros"}
      body={
        <>
          <Title>Status</Title>
          <FormGroup>
          <FormControlLabel  
                control={
                  <CustomCheckbox
                    // checked={cryon}
                    // onChange={this.handleChange('cryon')}
                    color='primary'
                  />
                }
                label={<Text>Tarefas concluídas</Text>}
            />
          <FormControlLabel  
                control={
                  <CustomCheckbox
                    // checked={cryon}
                    // onChange={this.handleChange('cryon')}
                    color='primary'
                  />
                }
                label={<Text>Tarefas em andamento</Text>}
            />
          </FormGroup>
          <Title>Período</Title>
        </>
      }
    />
  );
};
