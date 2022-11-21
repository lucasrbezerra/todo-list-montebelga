import { Grid, styled, TextField } from "@mui/material";
import { useTheme } from "styled-components";
import { Theme } from "../../../themes";
import { FormContent } from "./styles";
import "dayjs/locale/ru";
import "dayjs/locale/pt";
import { WrapperButtons } from "../../Modal/styles";
import { Button } from "../../../components";
import { useForm } from "react-hook-form";
import { CreateGroup, Group } from "../../../interfaces";

interface IFormGroup {
  checked: boolean;
  setChecked: (value: boolean) => void;
  group?: Group;
  onEdit?: (new_title: string) => void;
  onCreate?: (group: CreateGroup) => void;
  type: "edit" | "register";
}

export const FormGroup: React.FC<IFormGroup> = ({
  checked,
  setChecked,
  group,
  onEdit,
  onCreate,
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (type === "edit" && onEdit) {
      onEdit(data["title"]);
    } else if (type === "register" && onCreate) {
      onCreate(data);
    } else {
      console.error("invalid type input");
    }
  };

  return (
    <FormContent onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid xs={12} item>
          <CustomTextField
            id="standard-basic"
            label="Título"
            placeholder="Título do grupo..."
            variant="standard"
            sx={{ width: "100%" }}
            {...register("title", { value: group?.title })}
          />
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
