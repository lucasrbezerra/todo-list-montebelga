import { Container, Navbar, Sidebar, Wrapper } from "./components";
import Router from "./router";
import { GlobalStyles, Theme } from "./themes";

export default function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Sidebar />
        <Wrapper>
          <Router />
        </Wrapper>
      </Container>
    </Theme>
  );
}
