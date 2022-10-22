import { useState } from "react";
import { FormFilter, Modal } from "../../components";

interface IFilter {
  checked: boolean;
  setChecked: (value: boolean) => void;
}

export const Filter: React.FC<IFilter> = ({ checked, setChecked }) => {
  const [save, setSave] = useState(false);

  const onSave = () => {
    setSave(!save);
  };

  return (
    <Modal
      checked={checked}
      setChecked={setChecked}
      onSave={onSave}
      title={"Filtros"}
      body={<FormFilter saveForm={save} />}
    />
  );
};
