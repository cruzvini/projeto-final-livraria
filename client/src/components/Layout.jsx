import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className={isSidebarCollapsed ? "layout" : "layout.close"}>
      <div className="layout_header">
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <div className="layout_menu">
        {isSidebarCollapsed && <Sidebar toggleSidebar={toggleSidebar} />}
      </div>
      <div className="layout_content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
