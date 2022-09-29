import { ContainerStyled, Title, Item, IconCadeirante } from "./styles";

interface IContainer {
  title: string;
  names: string[];
}

export const Container: React.FC<IContainer> = ({ title, names }) => {
  return (
    <ContainerStyled>
      <IconCadeirante className="fas fa-wheelchair"></IconCadeirante>
      <Title>{title}</Title>
      {names.map((name, index) => {
        if (name === "Game of Thrones") {
          return (
            <Item>
              GoT : {index} - {name}
            </Item>
          );
        } else {
          return (
            <Item>
              {index} - {name}
            </Item>
          );
        }
      })}
    </ContainerStyled>
  );
};
