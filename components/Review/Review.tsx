import styles from "./Review.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import cn from "classnames";
import { IReview } from "../../interfaces/product.interface";
import UserIcon from "./user.svg";
import format from "date-fns/format";
import { ru } from "date-fns/locale";
import { Rating } from "../Rating/Rating";

interface ReviewProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  rewiew: IReview;
}

export const Review = ({
  rewiew,
  className,
  ...props
}: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = rewiew;
  return (
    <div className={cn(styles.rewiew, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>
        <span> {title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyy", { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
