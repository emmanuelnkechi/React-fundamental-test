import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  lightNav: {
    backgroundColor: "#808080",
    color: "#ff0",
  },

  darkNav: {
    backgroundColor: "#c0c0c0",
    color: "#2f4f4f",
  },

  lightbtnTheme: {
    background: "#cc0000",
    color: "white",
  },

  darkbtnTheme: {
    background: "#f0f8ff",
    color: "#800080",
  },

  lightThemeLeft: {
    background: "#cecece",
    color: "#2f4f4f",
  },

  darkThemeLeft: {
    background: "white",
    color: "#696969",
  },

  lightThemeRight: {
    background: "white",
    color: "#000000",
  },

  darkThemeRight: {
    background: "#008080",
    color: "white",
  },
});
