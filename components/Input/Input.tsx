import styles from "./Input.module.css";
import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import cn from "classnames";
import { FieldError } from "react-hook-form";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: any;
  error?: FieldError;
}

export const Input = forwardRef(
  (
    { register, error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.wrapper, className)}>
        <input
          className={cn(styles.input, { [styles.error]: error })}
          {...props}
          ref={ref}
          {...register}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
