import styled from "styled-components";

export const NavbarContent = styled.div`
  height: ${({ theme }) => theme.sizes.navbarHeight};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.darkWhite};

  grid-area: nav;
`;
