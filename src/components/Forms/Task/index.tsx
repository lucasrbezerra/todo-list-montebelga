import { Autocomplete, Grid, styled, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { DefaultTheme, useTheme } from "styled-components";
import { Theme } from "../../../themes";
import { Button } from "../../Buttons";
import { FormContent } from "./styles";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

interface IFormTask {}

export const FormTask: React.FC<IFormTask> = ({}) => {
  interface FilmOptionType {
    label: string;
    year: number;
  }

  const flatProps = {
    options: top100Films.map((option: FilmOptionType) => option.label),
  };

  const theme = useTheme() as Theme;

  const CustomTextField = styled(TextField)({
    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      color: theme.colors.darkWhite,
    },
    ".css-1ptx2yq-MuiInputBase-root-MuiInput-root::before": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite,
    },
    ".css-1ptx2yq-MuiInputBase-root-MuiInput-root": {
      color: theme.colors.darkWhite,
    },
    ".css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
      color: theme.colors.darkWhite,
    },
    ".css-1ptx2yq-MuiInputBase-root-MuiInput-root::after": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite,
    },
    "&.css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root:hover fieldset": {
      borderColor: theme.colors.darkWhite,
    },
    "& label.Mui-focused": {
      color: theme.colors.darkWhite,
    },
    "& .MuiInput-underline:after": {
      color: theme.colors.darkWhite,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.colors.darkWhite,
      },
      "&:hover fieldset": {
        borderColor: theme.colors.darkWhite,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.colors.darkWhite,
      },
    },
  });

  const CustomAutocomplete = styled(Autocomplete)({
    ".css-1qqsdnr-MuiAutocomplete-root": {
      color: theme.colors.darkWhite,
    },
  });

  return (
    <FormContent>
      <Grid container spacing={3}>
        <Grid xs={12} item>
          <CustomTextField
            id="standard-basic"
            label="Nome"
            placeholder="Nome da tarefa..."
            variant="standard"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={12} item>
          <CustomAutocomplete
            {...flatProps}
            id="flat-demo"
            renderInput={(params) => (
              <TextField {...params} label="flat" variant="standard" />
            )}
          />
        </Grid>
      </Grid>
    </FormContent>
  );
};
