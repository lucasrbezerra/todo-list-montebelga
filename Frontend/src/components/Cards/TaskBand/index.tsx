import { useState } from "react";
import { Checkbox, styled } from "@mui/material";
import { Task } from "../../../interfaces";
import { Content, Title, Band, IconCircle, IconCircleChecked } from "./styles";
import { finishTask } from "../../../api";

interface ITaskBand {
  task: Task;
}

export const TaskBand: React.FC<ITaskBand> = ({ task }) => {
  const [checked, setChecked] = useState(Boolean(task.hasFinished));

  const CustomCheckebox = styled(Checkbox)({
    ".MuiCheckbox-colorPrimary": {
      color: "red !important",
      background: "red !important",
    },
  });

  const handleCheck = async () => {
    try {
      const response = await finishTask(!checked, task.TaskId);
      if (response.status === 200) {
        setChecked((checked) => !checked);
      } else {
        console.log("error on check band");
      }
    } catch (error) {
      console.log("error on check band: ", error);
    }
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
