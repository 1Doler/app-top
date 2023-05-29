import { motion, useAnimation } from "framer-motion";
import { useScrollY } from "../../hooks/useScrollY";
import styles from "./Up.module.css";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div animate={controls} initial={{ opacity: 0 }}>
      <ButtonIcon
        icon="up"
        apperance="primary"
        onClick={scrolToTop}
        className={styles.up}
      />
    </motion.div>
  );
};
