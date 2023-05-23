import styles from "./Tag.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface TagProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: "s" | "m";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
  children: ReactNode;
}

export const Tag = ({
  size = "m",
  href,
  color = "ghost",
  className,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, styles[size], styles[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
