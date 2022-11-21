import { useState } from "react";

interface Toast {
  open: boolean;
  message?: string;
  type?: "success" | "warning" | "error" | "info" | null;
}

export interface ContextValues {
  toast: Toast;
  setToast: React.Dispatch<React.SetStateAction<Toast>>;
}

export const useGlobal = (initialValues: ContextValues) => {
  const [toast, setToast] = useState<Toast>(initialValues.toast);

  return {
    toast,
    setToast,
  };
};
