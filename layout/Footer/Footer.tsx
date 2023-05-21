import { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./Footer.module.css";
import cn from "classnames";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ ...props }: FooterProps) => {
  return <div {...props}>Footer</div>;
};
