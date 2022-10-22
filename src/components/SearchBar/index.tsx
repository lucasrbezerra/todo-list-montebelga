import React, { useState } from "react";
import { Icon, Input, Wrapper } from "./styles";

interface ISearchBar {}

export const SearchBar: React.FC<ISearchBar> = ({}) => {
  const [input, setInput] = useState("");

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
    setInput(evt.target.value);
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
