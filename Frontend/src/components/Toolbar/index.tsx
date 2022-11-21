import React, { useState } from "react";
import {
  ButtonChip,
  FormFilter,
  Icon,
  Modal,
  SearchBar,
} from "../../components";
import { Task, Group } from "../../interfaces";
import { Content, Title, Wrapper } from "./styles";

interface IToolbar {
  title: string;
  hiddenFilters: boolean;
  onSearch: (value: string) => void;
}

export const Toolbar: React.FC<IToolbar> = ({
  title,
  onSearch,
  hiddenFilters = false,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenFilters = () => {
    setOpenModal(true);
  };

  return (
    <Content>
      <Modal
        checked={openModal}
        setChecked={setOpenModal}
        title={"Filtros"}
        body={<FormFilter checked={openModal} setChecked={setOpenModal} />}
      />
      <Title>{title}</Title>
      <Wrapper>
        <SearchBar onSearch={onSearch} />
        {!hiddenFilters && (
          <ButtonChip onClick={handleOpenFilters}>
            <Icon className="fas fa-filter"></Icon>
            <p>Filtros</p>
          </ButtonChip>
        )}
      </Wrapper>
    </Content>
  );
};
