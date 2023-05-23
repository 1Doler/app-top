import styles from "./Card.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface CardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: "white" | "blue";
  children: ReactNode;
}

export const Card = ({
  color = "white",
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className, styles[color])} {...props}>
      {children}
    </div>
  );
};
