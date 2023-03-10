import { useEffect, useContext } from "react";
import SideMenu from "../components/side-menu";
import NavBar from "../components/nav-bar";
import { layoutStyle, contentStyle } from "../assets/styles/layout.css";
import { Props } from "../model/common.interface";
import { getCollapseValue } from "../utils/index";
import { ContentContext } from "../context/contentContext";
import { VariantCollapseInterface } from "../model/common.interface";

const Layout = ({ children }: Props) => {
  const { open } = useContext(ContentContext);

  let collapseValue: VariantCollapseInterface = getCollapseValue();

  useEffect(() => {
    collapseValue = getCollapseValue();
  }, [open]);
  return (
    <div className={layoutStyle}>
      <SideMenu />

      <div className={contentStyle[collapseValue]}>
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
