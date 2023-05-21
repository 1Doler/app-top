import { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./Header.module.css";
import cn from "classnames";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ ...props }: HeaderProps) => {
  return <div {...props}>Header</div>;
};
