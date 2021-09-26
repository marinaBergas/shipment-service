import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./SideBar.scss";
const SideBar = ({ collapsed, setCollapsed }) => {
  const { i18n } = useTranslation("translation");
  const { t } = useTranslation("translation");
  const cName = collapsed ? "side-bar animation" : "side-bar";
  const handleBarClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cName}>
      <NavLink onClick={handleBarClick} className="NavLink" to="/">
        {t(`welcome.Home`)}
      </NavLink>
      <NavLink onClick={handleBarClick} className="NavLink" to="/">
        {t(`welcome.Prices`)}
      </NavLink>
      <NavLink onClick={handleBarClick} className="NavLink" to="/">
        {t(`welcome.Contact_Sales`)}
      </NavLink>
      <NavLink onClick={handleBarClick} className="NavLink shipment" to="/">
        <p> {t(`welcome.Tracking_Shipment`)}</p>
        <FaAngleDown />
      </NavLink>
      <NavLink onClick={handleBarClick} className="NavLink" to="/">
        {t(`welcome.Sign_IN`)}
      </NavLink>
    </div>
  );
};

export default SideBar;
