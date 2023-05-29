import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

import ArrowIcon from "./arrow_icon.svg";

import styles from "./Button.module.css";
import cn from "classnames";
import { motion } from "framer-motion";

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
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
    <motion.button
      className={cn(styles.button, className, styles[apperance])}
      {...props}
      whileHover={{ scale: 1.05 }}
    >
      {children}
      {arrow != "none" && (
        <ArrowIcon className={cn(styles.arrow, styles[arrow])} />
      )}
    </motion.button>
  );
};
