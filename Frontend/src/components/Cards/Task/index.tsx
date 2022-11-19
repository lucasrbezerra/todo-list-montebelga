import { useState } from "react";
import { Checkbox } from "@mui/material";
import { EditableTask, Task } from "../../../interfaces";
import { getFormatedDate } from "../../../services";
import {
  ActionsWrapper,
  Content,
  Divider,
  FinishLabel,
  FinishTask,
  GroupIcon,
  GroupId,
  GroupTitle,
  LimitTime,
  TaskActions,
  TaskInfos,
  TimeDisplay,
  TimeIcon,
  Title,
  Wrapper,
  ButtonActions,
} from "./styles";
import { IconCircle, IconCircleChecked } from "../TaskBand/styles";
import { DialogConfirm, FormTask, Modal } from "../../../components";

interface ICardTask {
  task: Task;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export const CardTask: React.FC<ICardTask> = ({ task, tasks, setTasks }) => {
  const [checked, setChecked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleCheck = () => {
    setChecked((checked) => !checked);
  };

  const onDelete = () => {
    const index = tasks.indexOf(task);
    let sliced_tasks = [...tasks];
    sliced_tasks.splice(index, 1);
    setTasks(sliced_tasks);
    setOpenDialog(false);
  };

  const onEdit = (value: EditableTask) => {
    const index = tasks.indexOf(task);
    let edit_tasks = [...tasks];
    edit_tasks[index].title = value.title;
    edit_tasks[index].limitTime = value.limitTime;
    edit_tasks[index].GroupId = value.GroupId;
    setTasks(edit_tasks);
    setOpenModal(false);
  };

  const handleDelete = () => {
    setOpenDialog(true);
  };

  const handleEdit = () => {
    setOpenModal(true);
  };

  return (
    <Wrapper>
      <DialogConfirm
        open={openDialog}
        setOpen={setOpenDialog}
        onAgree={() => onDelete()}
        type="tarefa"
      />
      <Modal
        checked={openModal}
        setChecked={setOpenModal}
        title="Editar grupo"
        body={
          <FormTask
            checked={openModal}
            setChecked={setOpenModal}
            task={task}
            onEdit={onEdit}
            type="edit"
          />
        }
      />
      <Content hasFinished={checked}>
        <GroupId hasFinished={checked}>
          <GroupIcon hasFinished={checked} className="fas fa-layer-group" />
          <GroupTitle>{task.GroupId.title}</GroupTitle>
        </GroupId>
        <LimitTime hasFinished={checked}>
          <TimeIcon hasFinished={checked} className="far fa-calendar" />
          <TimeDisplay hasFinished={checked}>
            {getFormatedDate(task.limitTime)}
          </TimeDisplay>
        </LimitTime>
        <TaskInfos>
          <Title hasFinished={checked}>{task.title}</Title>
          <Divider />
          <TaskActions>
            <FinishTask>
              <Checkbox
                color="primary"
                checked={checked}
                onChange={handleCheck}
                icon={<IconCircle className="far fa-circle" />}
                checkedIcon={
                  <IconCircleChecked className="far fa-dot-circle" />
                }
              />
              <FinishLabel hasFinished={checked}>Finalizar tarefa</FinishLabel>
            </FinishTask>

            <ActionsWrapper>
              <ButtonActions
                hasFinished={checked}
                className="fas fa-pen"
                onClick={() => handleEdit()}
              />
              <ButtonActions
                hasFinished={checked}
                className="fas fa-trash"
                onClick={() => handleDelete()}
              />
            </ActionsWrapper>
          </TaskActions>
        </TaskInfos>
      </Content>
    </Wrapper>
  );
};
