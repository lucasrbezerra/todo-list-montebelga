import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 0.5rem 1rem;
`;

export const Item = styled.p`
  color: ${({ theme }) => theme.colors.darkWhite};
  margin: 0.5rem 1rem;
`;

export const IconCadeirante = styled.i`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.lightGreen};
`
