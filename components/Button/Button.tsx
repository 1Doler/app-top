import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

import ArrowIcon from "./arrow_icon.svg";

import styles from "./Button.module.css";
import cn from "classnames";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  apperance: "primary" | "ghost";
  children: ReactNode;
  arrow?: "right" | "down" | "none";
}

export const Button = ({
  apperance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, styles[apperance])}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <ArrowIcon className={cn(styles.arrow, styles[arrow])} />
      )}
    </button>
  );
};
