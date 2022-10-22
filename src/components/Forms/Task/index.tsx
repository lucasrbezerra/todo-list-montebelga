import { Autocomplete, Grid, styled, TextField } from "@mui/material";
import { useState } from "react";
import { useTheme } from "styled-components";
import { Theme } from "../../../themes";
import { FormContent } from "./styles";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/pt";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

interface IFormTask {}

interface FilmOptionType {
  label: string;
  year: number;
}

export const FormTask: React.FC<IFormTask> = ({}) => {
  const theme = useTheme() as Theme;

  const CustomTextField = styled(TextField)({
    ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
      color: theme.colors.darkWhite,
    },
    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite + " !important",
    },
    ".css-1ptx2yq-MuiInputBase-root-MuiInput-root::before": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite + " !important",
    },
    ".css-1ptx2yq-MuiInputBase-root-MuiInput-root": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite,
    },
    ".css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite,
    },
    ".css-1ptx2yq-MuiInputBase-root-MuiInput-root:after": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite,
    },
    "& label.Mui-focused": {
      color: theme.colors.darkWhite,
    },
  });

  const CustomAutocomplete = styled(Autocomplete)({
    ".css-1a1fmpi-MuiInputBase-root-MuiInput-root": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite + " !important",
    },
    ".css-1a1fmpi-MuiInputBase-root-MuiInput-root::before": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite + " !important",
    },
    ".css-1a1fmpi-MuiInputBase-root-MuiInput-root::after": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite + " !important",
    },
    ".css-1a1fmpi-MuiInputBase-root-MuiInput-root:focused": {
      color: theme.colors.darkWhite,
      borderColor: theme.colors.darkWhite + " !important",
    },
    ".css-ptiqhd-MuiSvgIcon-root": {
      color: theme.colors.darkWhite,
    },
    ".css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator":
      {
        color: theme.colors.darkWhite,
      },
    ".css-113ntv0-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator":
      {
        color: theme.colors.darkWhite,
      },
  });

  const flatProps = {
    options: top100Films.map((option: FilmOptionType) => option.label),
  };

  const [date, setDate] = useState<Dayjs>(dayjs(new Date().toISOString()));

  const handleChangeDate = (newDate: any) => {
    console.log("newDate: ", newDate?.toISOString());
    setDate(newDate);
  };

  return (
    <FormContent>
      <Grid container spacing={3}>
        <Grid xs={12} item>
          <CustomTextField
            // id="standard-basic"
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
              <CustomTextField {...params} label="Grupos" variant="standard" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt">
            <DateTimePicker
              label="Tempo Limite"
              value={date}
              onChange={handleChangeDate}
              renderInput={(params) => (
                <CustomTextField
                  {...params}
                  sx={{ width: "100%", marginTop: "1rem" }}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </FormContent>
  );
};
