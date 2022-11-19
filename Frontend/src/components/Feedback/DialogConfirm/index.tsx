import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "styled-components";
import { Theme } from "../../../themes";

interface IDialogConfirm {
  open: boolean;
  setOpen: (value: boolean) => void;
  onAgree: () => void;
  type: string;
}

export const DialogConfirm: React.FC<IDialogConfirm> = ({
  open,
  type,
  setOpen,
  onAgree,
}) => {
  const theme = useTheme() as Theme;

  const handleAgree = () => {
    onAgree();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{ color: theme.colors.pink }}>
        {`Deletar ${type}`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          style={{ color: theme.colors.lightBlue }}
        >
          {`Deseja realmente deletar esse(a) ${type}?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          style={{ background: theme.colors.pink }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleAgree}
          autoFocus
          style={{ color: theme.colors.pink }}
        >
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};
