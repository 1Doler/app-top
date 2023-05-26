import styles from "./ReviewForm.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import cn from "classnames";
import { Input, Rating, Textarea, Button } from "../index";

interface ReviewFormProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  productId: string;
}

export const ReviewForm = ({
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <div className={cn(styles.reviewForm, className)} {...props}>
      <Input className={styles.name} placeholder="Имя" />
      <Input className={styles.title} placeholder="Заголовок отзыва" />
      <div className={styles.rating}>
        <span>Оценка: </span>
        <Rating rating={0} isEditable={true} />
      </div>
      <Textarea className={styles.review} placeholder="Текст отзыва" />
      <div className={styles.submit}>
        <Button apperance="primary">Отправить</Button>
        <span className={styles.desctiption}>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </span>
      </div>
    </div>
  );
};
