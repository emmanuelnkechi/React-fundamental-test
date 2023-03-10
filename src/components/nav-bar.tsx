import { useContext } from "react";
import { navBarStyle, navLinkStyle } from "../assets/styles/nav-bar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { VariantInterface } from "../model/common.interface";
import { routesConstant } from "../constants/routes-constant";

const NavBar = () => {
  const { theme } = useContext(ThemeContext) as VariantInterface;
  return (
    <nav className={navBarStyle[theme]}>
      <NavLink to={routesConstant.GET_PAGE1} className={navLinkStyle[theme]}>
        Pioneering Programmers Test App
      </NavLink>
    </nav>
  );
};

export default NavBar;
