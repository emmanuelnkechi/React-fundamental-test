import { createVar, style } from "@vanilla-extract/css";

export const display = createVar();

export const modal = style({
  display: display,
  position: "fixed",
  zIndex: "1",
  paddingTop: "6rem",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.4)",
});

export const modalContent = style({
  backgroundColor: "#fefefe",
  margin: " 10rem auto",
  padding: "3rem 1rem 2rem 1rem",
  border: "1px solid #888",
  width: "50%",
  borderRadius: "0.8rem",

  "@media": {
    "screen and (min-width: 280px) and (max-width: 677px)": {
      width: "70%",
    },
  },
});

export const modalTitle = style({
  textAlign: "center",
  fontWeight: "600",
  fontSize: "1.8rem",
});

export const modalBody = style({
  textAlign: "center",
});

export const modalFoot = style({
  marginTop: "2rem",
  display: "flex",
  justifyContent: "right",
  gap: "0.8rem",
});

export const modalFootOkBtn = style({
  backgroundColor: "#03F",
});

export const modalFootCancelBtn = style({
  backgroundColor: "transparent",
  color: "black",
  border: "none",
});

export const modalFootRemoveBtn = style({
  backgroundColor: "#ffa500",
  color: "black",
});

export const modalFootDeleteBtn = style({
  backgroundColor: "#cc0000",
  color: "white",
});
