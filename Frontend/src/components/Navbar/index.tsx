import { useState, useContext } from "react";
import { createGroup, createTask } from "../../api";
import {
  Logo,
  ButtonChip,
  Icon,
  Modal,
  FormTask,
  FormGroup,
} from "../../components";
import { TasksContext, GroupsContext, GlobalContext } from "../../contexts";
import { CreateTask, CreateGroup } from "../../interfaces";
import { NavbarContent, Wrapper } from "./styles";

interface INavbar {}

const MODAL_TYPE = {
  TASK: "task",
  GROUP: "group",
};

export const Navbar: React.FC<INavbar> = ({}) => {
  const { setTasks } = useContext(TasksContext);
  const { setGroups } = useContext(GroupsContext);
  const { setToast } = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("task");

  const onCreateTask = async (new_task: CreateTask) => {
    try {
      const response = await createTask(new_task);
      if (response.status === 200) {
        const new_task = response.data.data;
        setTasks((tasks) => [...tasks, new_task]);
        setOpenModal(false);
        setToast({
          open: true,
          type: "success",
          message: "Tarefa criada com sucesso!",
        });
      } else {
        console.error("error creating task");
        setToast({
          open: true,
          type: "error",
          message: "Erro ao criar tarefa!",
        });
      }
    } catch (error) {
      console.error(error);
      setToast({
        open: true,
        type: "error",
        message: "Erro ao criar tarefa!",
      });
    }
  };

  const onCreateGroup = async (group: CreateGroup) => {
    try {
      const response = await createGroup(group);
      if (response.status === 200) {
        const new_group = response.data.data;
        setGroups((groups) => [...groups, new_group]);
        setOpenModal(false);
        setToast({
          open: true,
          type: "success",
          message: "Grupo criado com sucesso!",
        });
      } else {
        console.error("error creating groups");
        setToast({
          open: true,
          type: "error",
          message: "Erro ao criar grupo!",
        });
      }
    } catch (error) {
      console.error(error);
      setToast({
        open: true,
        type: "error",
        message: "Erro ao criar grupo!",
      });
    }
  };

  const handleCreateTask = () => {
    setModalType(MODAL_TYPE["TASK"]);
    setOpenModal(true);
  };

  const handleCreateGroup = () => {
    setModalType(MODAL_TYPE["GROUP"]);
    setOpenModal(true);
  };

  return (
    <NavbarContent>
      <Modal
        checked={openModal}
        setChecked={setOpenModal}
        title={
          modalType === MODAL_TYPE["TASK"] ? "Criar tarefa" : "Criar grupo"
        }
        body={
          modalType === MODAL_TYPE["TASK"] ? (
            <FormTask
              checked={openModal}
              setChecked={setOpenModal}
              onCreate={onCreateTask}
              type="register"
            />
          ) : (
            <FormGroup
              checked={openModal}
              setChecked={setOpenModal}
              onCreate={onCreateGroup}
              type="register"
            />
          )
        }
      />
      <Logo src="/img/Logo.svg" alt="Logo"></Logo>
      <Wrapper>
        <ButtonChip onClick={handleCreateTask}>
          <Icon className="fas fa-plus"></Icon>
          <p>Criar Tarefa</p>
        </ButtonChip>
        <ButtonChip onClick={handleCreateGroup}>
          <Icon className="fas fa-folder-plus"></Icon>
          <p>Criar Grupo</p>
        </ButtonChip>
      </Wrapper>
    </NavbarContent>
  );
};
