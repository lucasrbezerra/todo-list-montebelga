import React, { useState } from "react";
import { Icon, Input, Wrapper } from "./styles";

interface ISearchBar {
  onSearch: (value: string) => void;
}

export const SearchBar: React.FC<ISearchBar> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value);
    onSearch(evt.target.value);
  };

  return (
    <Wrapper>
      <Icon className="fas fa-search"></Icon>
      <Input
        type="text"
        placeholder="Buscar..."
        value={input}
        onChange={(evt) => handleSearch(evt)}
      />
    </Wrapper>
  );
};
