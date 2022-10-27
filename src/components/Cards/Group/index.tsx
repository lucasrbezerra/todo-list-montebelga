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
} from "./styles";
import { ButtonActions, TaskBand } from "../../../components";
import { Divider } from "@mui/material";

interface ICardGroup {
  group: Group;
}

export const CardGroup: React.FC<ICardGroup> = ({ group }) => {
  // console.log(group);
  return (
    <Content>
      <Head>
        <InfosWrapper flex>
          <Image src="/img/group.svg" alt="Group"></Image>
          <InfosWrapper>
            <Title>{group.title}</Title>
            <Subtitle>há 36 minutos</Subtitle>
          </InfosWrapper>
        </InfosWrapper>
        <Actions>
          <ButtonActions className="fas fa-pen" />
          <ButtonActions className="fas fa-trash" />
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
