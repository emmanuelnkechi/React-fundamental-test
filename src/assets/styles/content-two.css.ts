import { style } from "@vanilla-extract/css";

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

export const deleteBtnStyles = style({
  selectors: {
    "&:disabled": {
      opacity: "0.2",
      cursor: "not-allowed",
    },
  },
});
