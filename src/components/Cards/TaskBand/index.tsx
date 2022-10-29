import { useState } from "react";
import { Checkbox, styled } from "@mui/material";
import { Task } from "../../../interfaces";
import { Content, Title, Band, IconCircle, IconCircleChecked } from "./styles";

interface ITaskBand {
  task: Task;
}

export const TaskBand: React.FC<ITaskBand> = ({ task }) => {
  const [checked, setChecked] = useState(false);

  const CustomCheckebox = styled(Checkbox)({
    ".MuiCheckbox-colorPrimary": {
      color: "red !important",
      background: "red !important",
    },
  });

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <Content>
      <Band checked={checked} />
      <Title>{task.title}</Title>
      <CustomCheckebox
        color="primary"
        checked={checked}
        onChange={handleCheck}
        icon={<IconCircle className="far fa-circle" />}
        checkedIcon={<IconCircleChecked className="far fa-dot-circle" />}
      />
    </Content>
  );
};
