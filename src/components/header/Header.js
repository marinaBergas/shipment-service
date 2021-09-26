import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import SideBar from "../sidebar/SideBar";
const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
    </div>
  );
};

export default Header;
