import styled from "styled-components";

export const Content = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.wine};
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
