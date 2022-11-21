import { Autocomplete, Grid, styled, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Theme } from "../../../themes";
import { FormContent } from "./styles";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/pt";
import { addHours } from "date-fns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { WrapperButtons } from "../../Modal/styles";
import { Button } from "../../../components";
import { useForm } from "react-hook-form";
import { CreateTask, Group, Task } from "../../../interfaces";
import { getGroupById, getGroups } from "../../../api";

interface IFormTask {
  checked: boolean;
  setChecked: (value: boolean) => void;
  task?: Task;
  onEdit?: (data: CreateTask) => void;
  onCreate?: (data: CreateTask) => void;
  type: "edit" | "register";
}

export const FormTask: React.FC<IFormTask> = ({
  checked,
  setChecked,
  task,
  onEdit,
  onCreate,
  type,
}) => {
  const theme = useTheme() as Theme;
  const [groupOwner, setGroupOwner] = useState<Group | null>(null);
  const [selected, setSelected] = useState({ label: "", GroupId: 0 });
  const [groups, setGroups] = useState<Group[]>([]);

  const getAllGroups = async () => {
    try {
      const { data } = await getGroups();
      setGroups(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getGroupOwner = async () => {
    try {
      if (task && type === "edit") {
        const { data } = await getGroupById(task.GroupId);
        setSelected({ label: data.title, GroupId: data.GroupId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGroups();
    getGroupOwner();
  }, []);

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
    options: groups.map((option: Group) => {
      return { label: option.title, GroupId: option.GroupId };
    }),
  };

  const [date, setDate] = useState<Dayjs>(
    dayjs(
      type === "edit"
        ? addHours(new Date(task?.limitTime || ""), -3).toISOString()
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

  const handleChange = (e: any, v: any) => {
    setSelected(v);
  };

  const onSubmit = (data: any) => {
    if (type === "edit" && onEdit) {
      const edited_task = {
        title: data.title,
        limitTime: addHours(new Date(date.toString()), -3).toISOString(),
        GroupId: selected?.GroupId,
      };
      onEdit(edited_task);
    } else if (type === "register" && onCreate) {
      const created_task = {
        title: data.title,
        limitTime: addHours(new Date(date.toString()), -3).toISOString(),
        GroupId: selected?.GroupId,
      };
      onCreate(created_task);
    } else {
      console.error("error: method not accpeted");
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
            defaultValue={selected?.label}
            value={selected?.label}
            onChange={handleChange}
            renderInput={(params) => (
              <CustomTextField
                {...params}
                label="Grupos"
                variant="standard"
                defaultValue={selected?.label}
                {...register("group", { value: selected?.label })}
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
