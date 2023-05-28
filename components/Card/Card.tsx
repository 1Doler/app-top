import styles from "./Card.module.css";
import {
  DetailedHTMLProps,
  ForwardedRef,
  HtmlHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import cn from "classnames";

interface CardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: "white" | "blue";
  children: ReactNode;
}

export const Card = forwardRef(
  (
    { color = "white", children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.card, className, styles[color])}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
