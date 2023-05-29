import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "./Header.module.css";
import cn from "classnames";

import LogoIcon from "./logo.svg";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opend: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <LogoIcon />
      <ButtonIcon
        apperance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial="closed"
        animate={isOpened ? "opend" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          apperance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
