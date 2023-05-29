import styles from "./HhData.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

import RateIcon from "./rate.svg";

import cn from "classnames";
import { Card } from "../Card/Card";
import { priceRu } from "../../helpers/helpers";
interface CardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.hh, className)} {...props}>
      <Card className={styles.hhCount}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div className={styles.salaryItem}>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div className={styles.salaryItem}>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div className={styles.salaryItem}>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
      </Card>
    </div>
  );
};
