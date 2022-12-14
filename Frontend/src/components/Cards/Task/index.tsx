import { useContext, useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { CreateTask, Group, Task } from "../../../interfaces";
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
import { deleteTask, editTask, finishTask, getGroupById } from "../../../api";
import { GlobalContext } from "../../../contexts";

interface ICardTask {
  task: Task;
  tasks: Task[];
  input: string;
  setTasks: (tasks: Task[]) => void;
}

export const CardTask: React.FC<ICardTask> = ({
  task,
  tasks,
  setTasks,
  input,
}) => {
  const { setToast } = useContext(GlobalContext);
  const [checked, setChecked] = useState(Boolean(task.hasFinished));
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [groupOwner, setGroupOwner] = useState<Group | null>(null);

  useEffect(() => {
    setChecked(Boolean(task.hasFinished));
  }, [tasks, input]);

  const getGroupOwner = async () => {
    try {
      const response = await getGroupById(task.GroupId);
      setGroupOwner(response.data.data);
    } catch (error) {
      console.log(error);
      setGroupOwner({
        title: "Sem grupo",
        GroupId: -1,
        createdAt: "",
        updatedAt: "",
      });
    }
  };

  useEffect(() => {
    getGroupOwner();
  }, [tasks]);

  const handleCheck = async () => {
    try {
      const response = await finishTask(!checked, task.TaskId);
      if (response.status === 200) {
        setChecked((checked) => !checked);
      } else {
        console.log("error on check");
      }
    } catch (error) {
      console.log("error on check: ", error);
    }
  };

  const onDelete = async () => {
    try {
      const response = await deleteTask(task.TaskId);
      if (response.status === 200) {
        const index = tasks.indexOf(task);
        let sliced_tasks = [...tasks];
        sliced_tasks.splice(index, 1);
        setTasks(sliced_tasks);
        setOpenDialog(false);
        setToast({
          open: true,
          type: "warning",
          message: "Tarefa deletada com sucesso!",
        });
      } else {
        console.error("error on delete task");
        setToast({
          open: true,
          type: "error",
          message: "Erro ao deletar tarefa!",
        });
      }
    } catch (error) {
      console.error(error);
      setToast({
        open: true,
        type: "error",
        message: "Erro ao deletar tarefa!",
      });
    }
  };

  const onEdit = async (new_task: CreateTask) => {
    try {
      const response = await editTask(new_task, task.TaskId);
      if (response.status === 200) {
        const index = tasks.indexOf(task);
        let edit_tasks = [...tasks];
        edit_tasks[index].title = new_task.title;
        edit_tasks[index].limitTime = new_task.limitTime;
        edit_tasks[index].GroupId = new_task.GroupId;
        edit_tasks[index].updatedAt = new Date().toISOString();
        setTasks(edit_tasks);
        setOpenModal(false);
        setToast({
          open: true,
          type: "info",
          message: "Tarefa editada com sucesso!",
        });
      } else {
        console.error("error on edit task");
        setToast({
          open: true,
          type: "error",
          message: "Erro ao editar tarefa!",
        });
      }
    } catch (error) {
      console.error("error on edit task");
      setToast({
        open: true,
        type: "error",
        message: "Erro ao editar tarefa!",
      });
    }
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
          <GroupTitle>{groupOwner?.title}</GroupTitle>
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
