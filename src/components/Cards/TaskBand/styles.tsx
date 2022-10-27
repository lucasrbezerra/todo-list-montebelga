import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: 500;
  padding: 1rem;
`;
