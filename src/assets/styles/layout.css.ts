import { style, globalStyle, styleVariants } from "@vanilla-extract/css";

export const layoutStyle = style({
  display: "flex",
  height: "100vh",
});

const baseContentStyle = style({
  width: "100%",
  height: "100vh",
});

export const contentStyle = styleVariants({
  false: [
    baseContentStyle,
    {
      marginLeft: "4%",
      flexBasis: "96%",
      "@media": {
        "screen and (min-width: 280px) and (max-width: 677px)": {
          marginLeft: "0%",
          flexBasis: "100%",
        },
      },
    },
  ],
  true: [
    baseContentStyle,
    {
      marginLeft: "8%",
      flexBasis: "92%",
      "@media": {
        "screen and (min-width: 280px) and (max-width: 677px)": {
          marginLeft: "0%",
          flexBasis: "100%",
        },
      },
    },
  ],
});

globalStyle(`button`, {
  background: "#cc0000",
  color: "white",
  border: "none",
  boxShadow: "0px 1px 10px 0px rgba(147, 146, 146, 0.5)",
  borderRadius: "0.2rem",
  padding: "0.8rem 2rem",
  cursor: "pointer",
});
