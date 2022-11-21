import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarButton, SidebarContent } from "./styles";
import { Icon } from "../../components";

interface ISidebar {}

const TYPES = {
  TASKS: "tasks",
  GROUPS: "groups",
};

export const Sidebar: React.FC<ISidebar> = ({}) => {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || TYPES["TASKS"]
  );

  const handleChangePage = (page: string) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };

  return (
    <SidebarContent>
      <Link to="/tasks" style={{ textDecoration: "none" }}>
        <SidebarButton
          isActive={currentPage === TYPES["TASKS"]}
          onClick={() => handleChangePage(TYPES["TASKS"])}
        >
          <Icon className="fas fa-tasks"></Icon>
          <p>Tarefas</p>
        </SidebarButton>
      </Link>
      <Link to="/groups" style={{ textDecoration: "none" }}>
        <SidebarButton
          isActive={currentPage === TYPES["GROUPS"]}
          onClick={() => handleChangePage(TYPES["GROUPS"])}
        >
          <Icon className="fas fa-folder-plus"></Icon>
          <p>Grupos</p>
        </SidebarButton>
      </Link>
    </SidebarContent>
  );
};
