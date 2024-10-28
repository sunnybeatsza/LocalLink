import React, { useState } from "react";
import "./Navbar.css";
import LogoImg from "../../Assets/Logo_Green2-removebg-preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <nav className="mobile-navbar">
        <ul className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
          <li>
            <a href="#">
              <CloseIcon onClick={toggleSidebar} />
            </a>
          </li>
          <li>
            <a href="#"></a>
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
        <ul className="desktop-navbar">
          <li>
            <a href="#">
              <img src={LogoImg} alt="" id="LogoImage" />
            </a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Normal Navbar</a>
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
