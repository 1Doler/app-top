import { motion, transform } from "framer-motion";

import { usePosition } from "../../hooks/usePosition";
import { useScrollY } from "../../hooks/useScrollY";

import styles from "./HomeHeader.module.css";

export const HomeHeader = (): JSX.Element => {
  const scrollY = useScrollY();
  const position = usePosition();
  const variants = {
    hidden: {
      x: -1000,
    },
    visible: custom => ({
      x: 0,
      transition: { delay: custom * 0.2 },
    }),
  };
  const variantsImg = {
    hidden: {
      x: 1000,
    },
    visible: custom => ({
      x: 0,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.div
      className={styles.header}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      animate={{ y: -scrollY / 6 }}
    >
      <motion.div className={styles.title} variants={variants} custom={1}>
        <span className={styles.sc}>Онлайн школа </span>
        для тех, кому нужны реальные навыки, а не просто сертификат
      </motion.div>
      <motion.p custom={3} className={styles.description} variants={variants}>
        Курсы и видео-лекции по дизайну, программированию и многим другим
        направлениям
      </motion.p>
      <motion.div
        custom={2}
        variants={variantsImg}
        className={styles.wrapperImg}
      >
        <motion.img
          className={styles.img}
          src="/courses1.png"
          animate={{ x: position.x / 80, y: position.y / 80 }}
        />
      </motion.div>
    </motion.div>
  );
};
