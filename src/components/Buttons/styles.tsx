import styled from "styled-components";

export const ButtonChip = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.wine};
  color: ${({ theme }) => theme.colors.darkWhite};
  padding: 0.5rem 1rem;

  border: none;
  outline: none;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &:nth-child(1) {
    margin-right: 1rem;
  }

  & > i {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }

  & > p {
    font-weight: 500;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.darkWhite};
  width: 5.5rem;
  height: 2rem;

  border: none;
  outline: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export const ButtonActions = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.wine};
  border-radius: 50%;
  margin-left: 0.5rem;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.wine};
    color: ${({ theme }) => theme.colors.darkBlue};
    cursor: pointer;
  }
`;
