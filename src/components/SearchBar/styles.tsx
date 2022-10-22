import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  margin-right: 2rem;
`;

export const Icon = styled.i`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.2rem;

  position: absolute;
  left: 0.8rem;
`;

export const Input = styled.input`
  padding: 0.4rem 1rem;
  padding-left: 2.3rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
`;
