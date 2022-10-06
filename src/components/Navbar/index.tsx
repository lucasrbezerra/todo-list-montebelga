import { NavbarContent } from "./styles";

interface INavbar {}

export const Navbar: React.FC<INavbar> = ({}) => {
  return (
    <NavbarContent>
      <p>Navbar</p>
    </NavbarContent>
  );
};
