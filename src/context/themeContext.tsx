import * as React from "react";
import { Props } from "../model/common.interface";
import { dateFormatter } from "../lib/date-format";

export const ThemeContext = React.createContext<any | null>(null);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = React.useState<string>("light");
  const [themeMessage, setThemeMessage] = React.useState("");

  const toggleTheme = () => {
    const currentDate = dateFormatter();
    if (theme === "light") {
      setTheme("dark");
      setThemeMessage(`${currentDate} Theme was set to Dark`);
    } else {
      setTheme("light");
      setThemeMessage(`${currentDate} Theme was set to Light`);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeMessage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
