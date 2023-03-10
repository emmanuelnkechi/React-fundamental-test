import { useContext } from "react";
import { navBarStyle, navLinkStyle } from "../assets/styles/nav-bar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { VariantInterface } from "../model/common.interface";

const NavBar = () => {
  const { theme } = useContext(ThemeContext) as VariantInterface;
  return (
    <nav className={navBarStyle[theme]}>
      <NavLink to="/" className={navLinkStyle[theme]}>
        Pioneering Programmers Test App
      </NavLink>
    </nav>
  );
};

export default NavBar;
