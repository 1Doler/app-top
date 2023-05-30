import { DetailedHTMLProps, HTMLAttributes } from "react";

import LogoIcon from "./logo.svg";

import styles from "./Footer.module.css";
import cn from "classnames";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.wrapper)} {...props}>
      <LogoIcon className={styles.icon} />
      <div className={styles.text}>
        Данный проект является тестовым
        <div>{""}</div> На данном сайте невозможно приобрести тот или иной
        продукт
      </div>
    </footer>
  );
};
