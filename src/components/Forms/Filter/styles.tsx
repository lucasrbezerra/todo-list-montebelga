import styled from "styled-components";

export const FormContent = styled.div`
  width: 35rem;
  height: auto;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.wine};
  font-weight: 600;
  margin: 0.1rem 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.darkWhite};
`;
