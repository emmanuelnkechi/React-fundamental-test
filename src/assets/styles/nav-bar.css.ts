import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const baseNavBarStyle = style({
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  fontWeight: "600",

  "@media": {
    "screen and (min-width: 280px) and (max-width: 677px)": {
      position: "fixed",
      fontSize: "0.8rem",
      height: "1rem",
      padding: "1rem 2rem 1rem  5rem",
      width: "100%",
    },
  },
});

const baseNavLinkStyle = style({
  textDecoration: "none",
  color: "#ff0",
});

export const navBarStyle = styleVariants({
  light: [baseNavBarStyle, { backgroundColor: vars.lightNav.backgroundColor }],
  dark: [baseNavBarStyle, { backgroundColor: vars.darkNav.backgroundColor }],
});

export const navLinkStyle = styleVariants({
  light: [baseNavLinkStyle, { color: vars.lightNav.color }],
  dark: [baseNavLinkStyle, { color: vars.darkNav.color }],
});
