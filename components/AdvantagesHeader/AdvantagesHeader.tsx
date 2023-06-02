import styles from "./AdvantagesHeader.module.css";
import cn from "classnames";

import { advantagesData, icons } from "./AdvantagesData";
import { Card } from "../Card/Card";

import { motion } from "framer-motion";

export const AdvantagesHeader = () => {
  const itemAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const timeAnimation = {
    hidden: {
      x: -1000,
    },
    visible: custom => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.p className={styles.title} variants={itemAnimation} custom={1}>
          Обучение – это удобно и результативно
        </motion.p>
        <div className={styles.wrapper}>
          {advantagesData.map((a, index) => {
            const IconComp = icons[a.icon];
            return (
              <motion.div
                className={cn(styles[a.icon])}
                key={a.icon}
                variants={itemAnimation}
                custom={index + 2}
                whileHover={{ scale: 1.1 }}
              >
                <Card color="white" className={cn(styles.item, styles[a.icon])}>
                  <IconComp className={styles.icon} />
                  <p className={styles.titleItem}>{a.title}</p>
                  <p className={styles.descriptionItem}>{a.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div className={styles.learn} whileInView="visible" viewport={{}}>
        <motion.div
          className={cn(styles.textLearn, styles.knowleage)}
          variants={timeAnimation}
          initial={{ x: 1000, opacity: 0 }}
          custom={2}
        >
          <h2 className={styles.titleLearn}>Актуальные знания</h2>
          <p className={styles.descriptionLearn}>
            Мы понимаем, как быстро меняются тренды и появляются обновления.
            Поэтому мы всегда следим за всеми новинками, добавляем в программу
            то, что требуют топовые компании. Мы предлагаем вам только
            актуальные знания, чтобы вы были впереди планеты всей.
          </p>
        </motion.div>
        <motion.div
          className={cn(styles.imgLearn, styles.knowleageImg)}
          variants={timeAnimation}
          initial={{ x: -1000, opacity: 0 }}
          custom={2}
        >
          <motion.img src="/learning.png" alt="boy" className={styles.boy} />
        </motion.div>
      </motion.div>
      <motion.div className={styles.learn} whileInView="visible" viewport={{}}>
        <motion.div
          className={styles.textLearn}
          variants={timeAnimation}
          initial={{ x: 1000, opacity: 0 }}
          custom={2}
        >
          <h2 className={styles.titleLearn}>Выбирай свой формат обучения</h2>
          <p className={styles.descriptionLearn}>
            Смотрите видео-лекции в удобное для вас время, обучайтесь на
            тренажере, участвуйте в интенсивных воркшопах с командой или
            проходите курс с гибким расписанием. На нашей платформе каждый
            найдет подходящий формат.
          </p>
        </motion.div>
        <motion.div
          className={styles.imgLearn}
          variants={timeAnimation}
          initial={{ x: -1000, opacity: 0 }}
          custom={2}
        >
          <motion.img
            src="/boy.png"
            alt="boy"
            className={styles.boy}
            animate={{
              y: [20, -20],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};
