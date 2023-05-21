import styles from "./P.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface PProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size: "s" | "m" | "l";
  children: ReactNode;
}

export const P = ({ size = "m", children, ...props }: PProps): JSX.Element => {
  return (
    <p className={cn(styles.p, styles[size])} {...props}>
      {children}
    </p>
  );
};
