import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarButton, SidebarContent } from "./styles";

interface ISidebar {}

const TYPES = {
  TASKS: "tasks",
  GROUPS: "groups",
};

export const Sidebar: React.FC<ISidebar> = ({}) => {
  const [currentPage, setCurrentPage] = useState(TYPES['TASKS']);

  const handleChangePage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <SidebarContent>
      <Link to="/tasks" style={{ textDecoration: "none" }}>
        <SidebarButton
          isActive={currentPage === TYPES["TASKS"]}
          onClick={() => handleChangePage(TYPES["TASKS"])}
        >
          <i className="fas fa-plus"></i>
          <p>Tarefas</p>
        </SidebarButton>
      </Link>
      <Link to="/groups" style={{ textDecoration: "none" }}>
        <SidebarButton
          isActive={currentPage === TYPES["GROUPS"]}
          onClick={() => handleChangePage(TYPES["GROUPS"])}
        >
          <i className="fas fa-folder-plus"></i>
          <p>Grupos</p>
        </SidebarButton>
      </Link>
    </SidebarContent>
  );
};
