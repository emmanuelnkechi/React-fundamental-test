import * as React from "react";
import { Props } from "../model/common.interface";

export const ContentContext = React.createContext<any | null>(null);

const ContentProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const toggleOpen = () => {
    setOpen(!open);
    localStorage.setItem("collapseValue", JSON.stringify(!open));
  };

  return (
    <ContentContext.Provider value={{ open, toggleOpen, setOpen }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
