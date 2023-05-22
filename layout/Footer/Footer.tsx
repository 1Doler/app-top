import { DetailedHTMLProps, HTMLAttributes } from "react";

import { format } from "date-fns";

import styles from "./Footer.module.css";
import cn from "classnames";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.wrapper)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a>Пользовательское соглашение</a>
      <a>Политика конфиденциальности</a>
    </footer>
  );
};
