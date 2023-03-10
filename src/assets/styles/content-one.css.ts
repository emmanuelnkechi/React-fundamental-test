import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const firstContentStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",
  "@media": {
    "screen and (min-width: 280px) and (max-width: 1024px)": {
      display: "grid",
      gridTemplateColumns: "1fr",
    },
  },
});

const baseWrapStyle = style({
  padding: "4rem 2rem",
});

export const leftWrapStyle = styleVariants({
  light: [
    baseWrapStyle,
    {
      background: vars.lightThemeLeft.background,
      color: vars.lightThemeLeft.color,
    },
  ],
  dark: [
    baseWrapStyle,
    {
      background: vars.darkThemeLeft.background,
      color: vars.darkThemeLeft.color,
    },
  ],
});

export const rightWrapStyle = styleVariants({
  light: [
    baseWrapStyle,
    {
      background: vars.lightThemeRight.background,
      color: vars.lightThemeRight.color,
    },
  ],
  dark: [
    baseWrapStyle,
    {
      background: vars.darkThemeRight.background,
      color: vars.darkThemeRight.color,
    },
  ],
});

export const themeButton = styleVariants({
  light: [
    {
      background: vars.lightbtnTheme.background,
      color: vars.lightbtnTheme.color,
    },
  ],
  dark: [
    {
      background: vars.darkbtnTheme.background,
      color: vars.darkbtnTheme.color,
    },
  ],
});

const baseBtnThemeStyle = style({
  borderRadius: "0rem 0.2rem 0.2rem 0rem",

  selectors: {
    "&:disabled": {
      opacity: "0.6",
      cursor: "not-allowed",
    },
  },
});

export const btnThemeStyle = styleVariants({
  light: [
    baseBtnThemeStyle,
    {
      background: vars.lightbtnTheme.background,
      color: vars.lightbtnTheme.color,
    },
  ],
  dark: [
    baseBtnThemeStyle,
    {
      background: vars.darkbtnTheme.background,
      color: vars.darkbtnTheme.color,
    },
  ],
});

export const addTextActionStyle = style({
  display: "grid",
  gridTemplateColumns: "9fr 3fr",
  marginTop: "2rem",
});

export const textAreaStyle = style({
  border: "none",
  borderRadius: "0.2rem 0rem 0rem 0.2rem",
  boxShadow: "0px 1px 10px 0px rgba(147, 146, 146, 0.5)",
});

export const multipleBtnContainerStyle = style({
  border: "1px solid red",
  marginTop: "2rem",
  textAlign: "center",
  padding: "2rem 1rem",
  borderRadius: "0.5rem",
});

export const multipleBtnStyle = style({
  marginTop: "2rem",
});

export const multipleBtnFlexStyle = style({
  marginTop: "2rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});
