import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import styles from "./Sidebar.module.css";
import cn from "classnames";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar = ({ ...props }: SidebarProps) => {
  return <div {...props}>Sidebar</div>;
};
