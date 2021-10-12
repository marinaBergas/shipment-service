import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./NavBar.scss";
const NavBar = ({ collapsed, setCollapsed }) => {
  const [activeId, setActiveId] = useState("");
  const [lan, setLan] = useState("ENG");
  const { i18n } = useTranslation("translation");
  const { t } = useTranslation("translation");

  const handleClick = (id) => {
    setActiveId(id);
  };
  const handleBarClick = () => {
    setCollapsed(!collapsed);
  };
  const handleTranslate = () => {
    if (lan === "ENG") {
      setLan("عربى");
    } else {
      setLan("ENG");
    }
    i18n.changeLanguage(lan);
  };
  const navbarlinksRight = [
    {
      linkName: `${t(`welcome.Home`)}`,
    },
    {
      linkName: `${t(`welcome.Prices`)}`,
    },
    {
      linkName: `${t(`welcome.Contact_Sales`)}`,
    },
  ];
  return (
    <div className="navBar">
      <div className="mobile-bars" onClick={() => handleBarClick()}>
        <FaBars />
      </div>
      <ul className="navbar-menu">
        <li>
          <div className="link-line"></div>
          {navbarlinksRight.map((link, index) => (
            <NavLink
              className={`${
                activeId === index ? "activeLink NavLink" : "NavLink"
              }`}
              to="/"
              key={index}
              onClick={() => handleClick(index)}
            >
              {link.linkName}
            </NavLink>
          ))}
        </li>
      </ul>
      <div className="navbar-menu">
        <NavLink className="NavLink track-shipment" to="/">
          <p>{t(`welcome.Tracking_Shipment`)}</p>
          <FaAngleDown />
        </NavLink>
        <NavLink className="NavLink" to="/">
          {t(`welcome.Sign_IN`)}
        </NavLink>
        <NavLink to="/">
          <button onClick={handleTranslate} className="lang">
            {lan}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
