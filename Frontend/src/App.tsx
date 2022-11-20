import { Container, Navbar, Sidebar, Wrapper } from "./components";
import Router from "./router";
import { GlobalStyles, Theme } from "./themes";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { TasksProvider, GroupsProvider } from "./contexts";

export default function App() {
  return (
    <GroupsProvider>
      <TasksProvider>
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
      </TasksProvider>
    </GroupsProvider>
  );
}
