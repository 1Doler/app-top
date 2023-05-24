import styles from "./Textarea.module.css";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import cn from "classnames";

interface TextareProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = ({
  className,
  ...props
}: TextareProps): JSX.Element => {
  return <textarea className={cn(styles.textarea, className)} {...props} />;
};
