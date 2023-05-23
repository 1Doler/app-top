import styles from "./Advantages.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import { Htags } from "../Htags/Htags";
import LikeIcon from "./like.svg";
import { IAdvantage } from "../../interfaces/toppage.interface";

interface AdvantagesProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  advantages: IAdvantage[];
}

export const Advantages = ({
  className,
  advantages,
  ...props
}: AdvantagesProps): JSX.Element => {
  const buildAdvantages = () => {
    return advantages.map((a) => {
      return (
        <div key={a._id} className={styles.item}>
          <div>
            <LikeIcon />
            <div className={styles.hr}></div>
          </div>
          <div className={styles.text}>
            <p className={styles.title}>{a.title}</p>
            <p className={styles.desc}>{a.description}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={cn(styles.advantages, className)} {...props}>
      <Htags tag="h3" className={styles.titleH}>
        Преимущества
      </Htags>
      <div className={styles.wrapper}>{buildAdvantages()}</div>
    </div>
  );
};
