import { ThemeProvider } from "styled-components";

const darkBlue = "#2C2A40";
const lightBlue = "#2D304C";
const wine = "#881F3B";
const pink = "#DE3361";
const lightGreen = "#4CAF50";
const darkWhite = "#D9D9D9";

const theme = {
  colors: {
    darkBlue,
    lightBlue,
    wine,
    pink,
    lightGreen,
    darkWhite,
  },
};

export const Theme: React.FC<any> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
