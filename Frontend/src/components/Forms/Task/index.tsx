import { Autocomplete, Grid, styled, TextField } from "@mui/material";
import { useState } from "react";
import { useTheme } from "styled-components";
import { Theme } from "../../../themes";
import { FormContent } from "./styles";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/pt";
import { addDays } from "date-fns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { WrapperButtons } from "../../Modal/styles";
import { Button } from "../../../components";
import { useForm } from "react-hook-form";
import { EditableTask, Task } from "../../../interfaces";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "The Witcher 3", year: 2008 },
];

interface IFormTask {
  checked: boolean;
  setChecked: (value: boolean) => void;
  task?: Task;
  onEdit?: (data: EditableTask) => void;
  type: "edit" | "register";
}

interface FilmOptionType {
  label: string;
  year: number;
}

export const FormTask: React.FC<IFormTask> = ({
  checked,
  setChecked,
  task,
  onEdit,
  type,
}) => {
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

  const [date, setDate] = useState<Dayjs>(
    dayjs(
      type === "edit"
        ? addDays(
            new Date(task?.limitTime.toString() || ""),
            task ? 1 : 0
          ).toISOString()
        : new Date().toISOString()
    )
  );

  const handleChangeDate = (newDate: any) => {
    setDate(newDate);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (type === "edit" && onEdit) {
      const edited_task = {
        title: data.title,
        limitTime: addDays(new Date(date.toString()), -1).toISOString(),
        GroupId: {
          title: data.group,
        },
      };
      onEdit(edited_task);
    } else {
      const created_task = {
        title: data.title,
        limitTime: addDays(new Date(date.toString()), -1).toISOString(),
        GroupId: {
          title: data.group,
        },
      };
      console.log("register: ", created_task);
    }
  };

  return (
    <FormContent onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid xs={12} item>
          <CustomTextField
            id="standard-basic"
            label="Nome"
            placeholder="Nome da tarefa..."
            variant="standard"
            sx={{ width: "100%" }}
            {...register("title", { value: task?.title })}
          />
        </Grid>
        <Grid xs={12} item>
          <CustomAutocomplete
            {...flatProps}
            id="flat-demo"
            defaultValue={task?.GroupId.title}
            renderInput={(params) => (
              <CustomTextField
                {...params}
                label="Grupos"
                variant="standard"
                defaultValue={task?.GroupId.title}
                {...register("group", { value: task?.GroupId.title })}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt">
            <DatePicker
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
        <Grid xs={12} item>
          <WrapperButtons>
            <Button onClick={() => setChecked(false)}>Cancelar</Button>
            <Button type="submit" autoFocus>
              Salvar
            </Button>
          </WrapperButtons>
        </Grid>
      </Grid>
    </FormContent>
  );
};
