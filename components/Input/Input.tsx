import styles from "./Input.module.css";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={cn(styles.input, className)} {...props} />;
};
