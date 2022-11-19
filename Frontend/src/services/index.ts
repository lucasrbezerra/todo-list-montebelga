// import { Dayjs } from "dayjs";

export const insertAtIndex = (array: any[], index: number, value: any) => {
  array?.splice(index, 0, value);
};

export const getFormatedDate = (date: string) => {
  let dashed_date = date.split("T")[0];
  return dashed_date.split("-").reverse().toString().replaceAll(",", "/");
};
