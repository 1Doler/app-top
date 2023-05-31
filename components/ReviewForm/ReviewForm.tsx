import styles from "./ReviewForm.module.css";
import { DetailedHTMLProps, HtmlHTMLAttributes, useState } from "react";
import cn from "classnames";
import { Input, Rating, Textarea, Button } from "../index";

import CloseIcon from "./close.svg";
import { Controller, useForm } from "react-hook-form";
import { IReviewFrom, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";

interface ReviewFormProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  productid: string;
}

export const ReviewForm = ({
  className,
  productid,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewFrom>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setIsError] = useState<string>();

  const onSubmit = async (formData: IReviewFrom) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.rewiev.createDemo,
        { ...formData, productId: productid }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError("Произошла ошибка");
      }
    } catch (e) {
      setIsError("Произошла обишка");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          register={{
            ...register("name", {
              required: { value: true, message: "Заполните имя" },
            }),
          }}
          error={errors.name}
          className={styles.name}
          placeholder="Имя"
        />
        <Input
          register={{
            ...register("title", {
              required: { value: true, message: "Заполните заголовок" },
            }),
          }}
          className={styles.title}
          error={errors.title}
          placeholder="Заголовок отзыва"
        />
        <div className={styles.rating}>
          <span>Оценка: </span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
            render={({ field }) => (
              <Rating
                ref={field.ref}
                error={errors.rating}
                rating={field.value}
                isEditable={true}
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <Textarea
          register={{
            ...register("description", {
              required: { value: true, message: "Заполните текст" },
            }),
          }}
          error={errors.description}
          className={styles.review}
          placeholder="Текст отзыва"
        />
        <div className={styles.submit}>
          <Button apperance="primary" type="submit">
            Отправить
          </Button>
          <span className={styles.desctiption}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={styles.success}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div className={styles.successDescription}>
            Спасибо, ваш отзыв будет опубликован после проверки
          </div>
          <CloseIcon
            className={styles.close}
            stroke="#1CC37E"
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <div className={styles.errorDescription}>
            Что-то пошло не так, попробуйте обновить страницу
          </div>
          <CloseIcon
            className={styles.closeError}
            stroke="white"
            onClick={() => setIsError("")}
          />
        </div>
      )}
    </form>
  );
};
