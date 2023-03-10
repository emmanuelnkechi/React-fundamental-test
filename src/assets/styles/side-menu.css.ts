import { style, globalStyle } from "@vanilla-extract/css";

export const sideMenuStyle = style({
  flexBasis: "15%",
  transition: "width 0.3s ease-in-out",
  backgroundColor: "#615d5d",
  paddingTop: "1.7rem",
  position: "fixed",
  overflowX: "hidden",
  zIndex: "1",
  top: "0",
  left: "0",
  height: "100vh",
});

export const sidenavClosed = style({
  transition: "width 0.3s ease-in-out",
  flexBasis: "5%",
  backgroundColor: "#615d5d",
  paddingTop: "1.7rem",
  position: "fixed",
  overflowX: "hidden",
  zIndex: "1",
  top: "0",
  left: "0",
  height: "100vh",

  "@media": {
    "screen and (min-width: 280px) and (max-width: 677px)": {
      height: "3rem",
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
      paddingTop: "0rem",
    },
  },
});

export const linkText = style({
  paddingLeft: "16px",
});

globalStyle(`${sidenavClosed} > a > ${linkText}`, {
  display: "none",
});
globalStyle(`${sidenavClosed} > a`, {
  "@media": {
    "screen and (min-width: 280px) and (max-width: 677px)": {
      display: "none",
    },
  },
});

export const sideItem = style({
  display: "flex",
  position: "relative",
  alignItems: "center",
  padding: "10px 20px",
  cursor: "pointer",
  color: "#B2BAC2",
  textDecoration: "none",
  marginTop: "3rem",
  selectors: {
    "&:hover": {
      backgroundColor: "black",
    },
  },
});

export const toolTipText = style({
  visibility: "hidden",
  backgroundColor: "#615d5d",
  boxShadow: "0px 1px 10px 0px rgba(147, 146, 146, 0.5)",
  borderRadius: "0.3rem",
  color: "#fff",
  width: "6rem",
  textAlign: "center",
  padding: "0.5rem",
  position: "absolute",
  zIndex: "1",

  selectors: {
    [`${sidenavClosed} > ${sideItem}:hover    &`]: {
      visibility: "visible",
      position: "fixed",
    },
  },
});

export const linkTextClosed = style({
  visibility: "hidden",
});

export const menuBtn = style({
  alignSelf: "center",
  justifySelf: "flex-end",
  color: "#B2BAC2",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  paddingLeft: "20px",
  outline: "outline",

  selectors: {
    "&:hover": {
      backgroundColor: "black",
    },
  },
});

globalStyle(`${sidenavClosed} > a > ${menuBtn}`, {
  "@media": {
    "screen and (min-width: 280px) and (max-width: 677px)": {
      height: "100%",
    },
  },
});
