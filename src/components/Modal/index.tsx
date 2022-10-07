import * as React from "react";
import { Button } from "../../components";
import { Title, WrapperButtons } from "./styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "styled-components";
import { Theme } from "../../themes";
import styled from "@emotion/styled";

interface IModal {
  checked: boolean;
  setChecked: (value: boolean) => void;
  body: React.ReactElement;
  title: string;
}

export const Modal: React.FC<IModal> = ({
  checked,
  setChecked,
  body,
  title,
}) => {
  const theme = useTheme() as Theme;

  const CustomDialog = styled(Dialog)({
    ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
      background: theme.colors.darkBlue,
    },
  });

  return (
    <CustomDialog
      open={checked}
      onClose={() => setChecked(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Title>{title}</Title>
      </DialogTitle>
      <DialogContent>{body}</DialogContent>
      <DialogActions>
        <WrapperButtons>
          <Button onClick={() => setChecked(false)}>Cancelar</Button>
          <Button onClick={() => setChecked(false)} autoFocus>
            Salvar
          </Button>
        </WrapperButtons>
      </DialogActions>
    </CustomDialog>
  );
};
