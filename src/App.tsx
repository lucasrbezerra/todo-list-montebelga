import { Container, Title } from "./components";
import { GlobalStyles, Theme } from "./themes";

export default function App() {
  const title = "Olá Vitaum";
  const names = ["The Office", "The Boys", "Game of Thrones", "Mr. Robot"];
  return (
    <Theme>
      <GlobalStyles />
      <Container title={title} names={names} />
    </Theme>
  );
}
