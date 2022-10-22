import React from "react";
import { ButtonChip, Icon, SearchBar } from "../../components";
import { Content, Title, Wrapper } from "./styles";

interface IToolbar {}

export const Toolbar: React.FC<IToolbar> = ({}) => {
  const handleOpenFilters = () => {
    console.log("Open Filters");
  };

  return (
    <Content>
      <Title>Lista de Tarefas</Title>
      <Wrapper>
        <SearchBar />
        <ButtonChip onClick={handleOpenFilters}>
          <Icon className="fas fa-filter"></Icon>
          <p>Filtros</p>
        </ButtonChip>
      </Wrapper>
    </Content>
  );
};
