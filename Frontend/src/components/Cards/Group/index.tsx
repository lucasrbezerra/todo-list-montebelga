import { Group } from "../../../interfaces";
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
import { useState } from "react";

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
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onDelete = () => {
    const index = groups.indexOf(group);
    let sliced_groups = [...groups];
    sliced_groups.splice(index, 1);
    setGroups(sliced_groups);
    setOpenDialog(false);
  };

  const onEdit = (new_title: string) => {
    const index = groups.indexOf(group);
    let edit_groups = [...groups];
    edit_groups[index].title = new_title;
    setGroups(edit_groups);
    setOpenModal(false);
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
            <Subtitle>há 36 minutos</Subtitle>
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
        {group.tasks.map((task, index) => {
          return <TaskBand task={task} key={index} />;
        })}
      </TasksContent>
      <Footer>
        <SeeMore>Ver mais tarefas</SeeMore>
      </Footer>
    </Content>
  );
};