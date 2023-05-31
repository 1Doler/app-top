import { motion } from "framer-motion";

import { usePosition } from "../../hooks/usePosition";

import styles from "./HomeHeader.module.css";

export const HomeHeader = (): JSX.Element => {
  const position = usePosition();
  const variants = {
    hidden: {
      x: -1000,
    },
    visible: (custom) => ({
      x: 0,
      transition: { delay: custom * 0.2 },
    }),
  };
  const variantsImg = {
    hidden: {
      x: 1000,
    },
    visible: (custom) => ({
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
    >
      <motion.div className={styles.title} variants={variants} custom={1}>
        <span className={styles.sc}>Онлайн школа </span>
        для тех, кому нужны реальные навыки, а не просто сертификат
      </motion.div>
      <motion.p custom={3} className={styles.description} variants={variants}>
        Курсы и видео-лекции по дизайну, программированию и многим другим
        направлениям
      </motion.p>
      <motion.img
        src="/courses.png"
        width={600}
        className={styles.img}
        custom={2}
        variants={variantsImg}
        animate={{ x: position.x / 80, y: position.y / 80 }}
      />
    </motion.div>
  );
};
