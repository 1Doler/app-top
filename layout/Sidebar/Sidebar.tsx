import { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import LogoIcon from "../logo.svg";
import { Search } from "../../components";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <LogoIcon className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};
