import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <nav>
        <ul className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
          <li>
            <a href="#">
              <CloseIcon onClick={toggleSidebar} />
            </a>
          </li>
          <li>
            <a href="#">Logo</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Logo</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Cart</a>
          </li>

          <li className="burgerIcon">
            <a href="#" onClick={toggleSidebar}>
              <MenuIcon />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
