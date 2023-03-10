import { leftWrapStyle } from "../assets/styles/content-one.css";
import { contentStyle } from "../assets/styles/layout.css";

export interface Props {
  children: React.ReactNode;
}

export interface VariantInterface {
  theme: keyof typeof leftWrapStyle;
}

export interface VariantCollapseInterface {
  collapseValue: keyof typeof contentStyle;
}
