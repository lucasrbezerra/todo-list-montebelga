import styled from "styled-components";

export const FormContent = styled.div`
  width: 40rem;
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

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;
