import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const SidebarContent = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.sizes.sidebarWidth};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.darkWhite};

  grid-area: sidebar;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

export const SidebarButton = styled.button`
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props: Props) =>
    props.isActive
      ? ({ theme }) => theme.colors.pink
      : ({ theme }) => theme.colors.lightBlue};

  color: ${(props: Props) =>
    props.isActive
      ? ({ theme }) => theme.colors.lightBlue
      : ({ theme }) => theme.colors.pink};

  margin: 0.5rem;

  border: none;
  outline: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  & > i {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }

  & > p {
    font-size: 0.75rem;
    font-weight: 600;
  }
`;
