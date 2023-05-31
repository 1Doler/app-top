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
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <p className={styles.title}>Обучение – это удобно и результативно</p>
      <div className={styles.wrapper}>
        {advantagesData.map((a, index) => {
          const IconComp = icons[a.icon];
          return (
            <motion.div
              className={cn(styles[a.icon])}
              key={a.icon}
              variants={itemAnimation}
              custom={index + 1}
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
  );
};
