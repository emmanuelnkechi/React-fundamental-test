import { useEffect, useContext } from "react";
import { menuData, collapseIcon } from "../lib/menu-data";
import { NavLink } from "react-router-dom";
import {
  sideMenuStyle,
  sidenavClosed,
  sideItem,
  linkText,
  menuBtn,
  toolTipText,
} from "../assets/styles/side-menu.css";
import { getCollapseValue } from "../utils/index";
import { ContentContext } from "../context/contentContext";

const SideMenu = () => {
  const { toggleOpen, open } = useContext(ContentContext);

  let collapseValue = getCollapseValue();

  useEffect(() => {
    collapseValue = getCollapseValue;
  }, [open]);

  return (
    <div className={collapseValue ? sideMenuStyle : sidenavClosed}>
      <button className={menuBtn} onClick={toggleOpen}>
        {collapseValue ? collapseIcon.openIcon : collapseIcon.closeIcon}
      </button>
      {menuData.map((item) => {
        return (
          <NavLink
            to={item.link}
            key={item.id}
            className={sideItem}
            target="_blank"
          >
            {item.icon}
            <span className={toolTipText}>{item.text}</span>
            <span className={linkText}>{item.text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideMenu;
