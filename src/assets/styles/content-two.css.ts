import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const secondContentStyle = style({
  padding: "4rem 2rem",
  margin: "3rem auto",
  height: "100vh",
});

export const btnSectionStyle = style({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
});

export const deleteBtnStyles = styleVariants({
  light: [
    {
      selectors: {
        "&:hover": {
          background: vars.darkbtnTheme.background,
          color: vars.darkbtnTheme.color,
        },
      },
    },
  ],
  dark: [
    {
      selectors: {
        "&:hover": {
          background: vars.lightbtnTheme.background,
          color: vars.lightbtnTheme.color,
        },
      },
    },
  ],
});
