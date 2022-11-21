import { Group, Task } from "../../../interfaces";
import {
  Content,
  Head,
  InfosWrapper,
  Image,
  Title,
  Subtitle,
  Actions,
  TasksContent,
  Footer,
  SeeMore,
  Divider,
} from "./styles";
import {
  ButtonActions,
  DialogConfirm,
  FormGroup,
  Modal,
  TaskBand,
} from "../../../components";
import { useContext, useEffect, useState } from "react";
import {
  deleteAllByGroup,
  deleteGroup,
  editGroup,
  getTasksByGroup,
} from "../../../api";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../contexts";

interface ICardGroup {
  group: Group;
  groups: Group[];
  setGroups: (groups: Group[]) => void;
}

export const CardGroup: React.FC<ICardGroup> = ({
  group,
  groups,
  setGroups,
}) => {
  const { setToast } = useContext(GlobalContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [tasksGroup, setTasksGroups] = useState<Task[]>([]);

  const getGroupTasks = async () => {
    try {
      const response = await getTasksByGroup(group.GroupId);
      if (response.status === 200) {
        setTasksGroups(response.data.data);
      } else {
        console.error("erro on get tasks by group ");
      }
    } catch (error) {
      console.error("erro on get tasks by group ", error);
    }
  };

  useEffect(() => {
    getGroupTasks();
  }, []);

  const onDelete = async () => {
    try {
      const response = await deleteGroup(group.GroupId);
      if (response.status === 200) {
        const response_tasks = await deleteAllByGroup(group.GroupId);
        if (response_tasks.status === 200) {
          const index = groups.indexOf(group);
          let sliced_groups = [...groups];
          sliced_groups.splice(index, 1);
          setGroups(sliced_groups);
          setOpenDialog(false);
          setToast({
            open: true,
            type: "warning",
            message: "Grupo deletado com sucesso!",
          });
        }
      } else {
        console.log("error on delete group");
        setToast({
          open: true,
          type: "error",
          message: "Erro ao deletar grupo!",
        });
      }
    } catch (error) {
      console.log("error on delete group", error);
      setToast({
        open: true,
        type: "error",
        message: "Erro ao deletar grupo!",
      });
    }
  };

  const onEdit = async (new_title: string) => {
    try {
      const response = await editGroup({ title: new_title }, group.GroupId);
      if (response.status === 200) {
        const index = groups.indexOf(group);
        let edit_groups = [...groups];
        edit_groups[index].title = new_title;
        edit_groups[index].updatedAt = new Date().toISOString();
        setGroups(edit_groups);
        setOpenModal(false);
        setToast({
          open: true,
          type: "info",
          message: "Grupo editado com sucesso!",
        });
      } else {
        console.log("error on edit group");
        setToast({
          open: true,
          type: "error",
          message: "Erro ao editar grupo!",
        });
      }
    } catch (error) {
      console.log("error on edit group", error);
      setToast({
        open: true,
        type: "error",
        message: "Erro ao editar grupo!",
      });
    }
  };

  const convertTime = () => {
    let date_now = new Date();
    let createDate = new Date(group.createdAt);
    let new_time = Math.abs(date_now.getTime() - createDate.getTime());
    let diffHour = Math.ceil(new_time / (1000 * 3600));
    return `há ${diffHour} horas`;
  };

  const handleDelete = () => {
    setOpenDialog(true);
  };

  const handleEdit = () => {
    setOpenModal(true);
  };

  return (
    <Content>
      <DialogConfirm
        open={openDialog}
        setOpen={setOpenDialog}
        onAgree={() => onDelete()}
        type="grupo"
      />
      <Modal
        checked={openModal}
        setChecked={setOpenModal}
        title="Editar grupo"
        body={
          <FormGroup
            checked={openModal}
            setChecked={setOpenModal}
            group={group}
            onEdit={onEdit}
            type="edit"
          />
        }
      />
      <Head>
        <InfosWrapper flex>
          <Image className="fas fa-layer-group"></Image>
          <InfosWrapper ml=".8rem">
            <Title>{group.title}</Title>
            <Subtitle>{convertTime()}</Subtitle>
          </InfosWrapper>
        </InfosWrapper>
        <Actions>
          <ButtonActions className="fas fa-pen" onClick={() => handleEdit()} />
          <ButtonActions
            className="fas fa-trash"
            onClick={() => handleDelete()}
          />
        </Actions>
      </Head>
      <Divider />
      <TasksContent>
        {tasksGroup.map((task, index) => {
          return <TaskBand task={task} key={index} />;
        })}
      </TasksContent>
      <Footer>
        <Link to="/tasks" style={{ textDecoration: "none" }}>
          <SeeMore onClick={() => localStorage.setItem("currentPage", "tasks")}>
            Ver mais tarefas
          </SeeMore>
        </Link>
      </Footer>
    </Content>
  );
};
