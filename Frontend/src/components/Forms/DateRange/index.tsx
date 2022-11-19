import { useEffect, useState } from "react";
import { ptBR } from "date-fns/locale";
import { DateRangePicker } from "react-date-range";

interface IDateRange {
  onChange: (startDate: string, endDate: string) => void;
}

type RangeDate = {
  startDate: Date;
  endDate: Date;
  key?: string;
};

export const DateRange: React.FC<IDateRange> = ({ onChange }) => {
  const configDateToString = (date: Date) => {
    const localISOTime = date.toISOString().slice(0, -1);
    return localISOTime;
  };

  const [inputDate, setInputDate] = useState<RangeDate>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChangeDate = (values: RangeDate) => {
    setInputDate(values);
    onChange(
      configDateToString(values.startDate),
      configDateToString(values.endDate)
    );
  };

  return (
    <DateRangePicker
      // style={{ width: "100%" }}
      locale={ptBR}
      dateDisplayFormat="dd/MM/yyyy"
      onChange={(item) => handleChangeDate(item.selection as any)}
      moveRangeOnFirstSelection={false}
      ranges={[inputDate]}
      direction="horizontal"
      inputRanges={[]}
      staticRanges={[]}
    />
  );
};
