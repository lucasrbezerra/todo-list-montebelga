import { Container, Navbar, Sidebar, Toast, Wrapper } from "./components";
import Router from "./router";
import { GlobalStyles, Theme } from "./themes";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { TasksProvider, GroupsProvider, GlobalProvider } from "./contexts";

export default function App() {
  return (
    <GlobalProvider>
      <GroupsProvider>
        <TasksProvider>
          <Theme>
            <GlobalStyles />
            <Toast />
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
    </GlobalProvider>
  );
}
