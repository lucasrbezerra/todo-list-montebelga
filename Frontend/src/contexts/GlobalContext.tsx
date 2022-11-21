import React, { createContext } from "react";
import { useGlobal } from "./hooks";

interface Props {
  children: React.ReactNode;
}

interface Toast {
  open: boolean;
  message?: string;
  type?: "success" | "warning" | "error" | "info" | null;
}

interface ContextValues {
  toast: Toast;
  setToast: React.Dispatch<React.SetStateAction<Toast>>;
}

const initialValues = {
  toast: {
    open: false,
    message: "",
    type: null,
  },
  setToast: () => {},
};

const GlobalContext = createContext<ContextValues>(initialValues);

const GlobalProvider: React.FC<Props> = ({ children }) => {
  const { toast, setToast } = useGlobal(initialValues as ContextValues);

  return (
    <GlobalContext.Provider value={{ toast, setToast } as ContextValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
