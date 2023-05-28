import styles from "./Textarea.module.css";
import {
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from "react";
import cn from "classnames";
import { FieldError } from "react-hook-form";

interface TextareProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  register?: any;
  error?: FieldError;
}

export const Textarea = forwardRef(
  (
    { register, error, className, ...props }: TextareProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.wrapper, className)}>
        <textarea
          ref={ref}
          {...register}
          {...props}
          className={cn(styles.textarea, { [styles.error]: error })}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
