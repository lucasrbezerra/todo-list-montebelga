import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkWhite};

  padding: 2rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: 0fr 0fr 12fr;
  grid-template-rows: 0fr 0fr 12fr;
  grid-template-areas:
    "nav nav nav"
    "sidebar main main"
    "sidebar main main";
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: main;
`;

export const Main = styled.div`
  height: 90%;
  width: 100%;
  background-color: pink;

  overflow-y: scroll;
  overflow-x: hidden;
`;
