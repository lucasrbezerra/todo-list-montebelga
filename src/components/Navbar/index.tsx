import { useState } from "react";
import {
  Logo,
  ButtonChip,
  Icon,
  Modal,
  FormTask,
  FormGroup,
} from "../../components";
import { NavbarContent, Wrapper } from "./styles";

interface INavbar {}

const MODAL_TYPE = {
  TASK: "task",
  GROUP: "group",
};

export const Navbar: React.FC<INavbar> = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("task");

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
            <FormTask checked={openModal} setChecked={setOpenModal} />
          ) : (
            <FormGroup checked={openModal} setChecked={setOpenModal} />
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
