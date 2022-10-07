import styled from "styled-components";

export const NavbarContent = styled.div`
  height: ${({ theme }) => theme.sizes.navbarHeight};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.darkWhite};

  grid-area: nav;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: .5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
`;
