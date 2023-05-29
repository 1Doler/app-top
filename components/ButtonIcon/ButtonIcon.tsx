import React from "react";

import styles from "./ButtonIcon.module.css";
import cn from "classnames";
import { ButtonIconProps, icons } from "./ButtonIcon.props";

export const ButtonIcon = ({
  apperance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(styles.button, className, styles[apperance])}
      {...props}
    >
      <IconComp />
    </button>
  );
};
