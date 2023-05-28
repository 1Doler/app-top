import {
  HtmlHTMLAttributes,
  DetailedHTMLProps,
  useState,
  useEffect,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from "react";

import styles from "./Rating.module.css";
import cn from "classnames";
import Star from "./star.svg";
import { FieldError } from "react-hook-form";

interface RatingProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isEditable?: boolean;
  rating: number;
  error?: FieldError;
  setRating?: (rating: number) => void;
}

export const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

    useEffect(() => {
      constructRating(rating);
    }, [rating]);
    const constructRating = (currentRating: number) => {
      const updateArray = ratingArray.map(
        (r: JSX.Element, i: number): JSX.Element => {
          return (
            <span
              className={cn(styles.star, {
                [styles.fill]: i < currentRating,
                [styles.isEditable]: isEditable,
              })}
              onMouseEnter={() => changeDisplay(i + 1)}
              onMouseLeave={() => changeDisplay(rating)}
              onClick={() => onClick(i + 1)}
            >
              <Star
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                  isEditable && handleSpace(i + 1, e)
                }
              />
            </span>
          );
        }
      );
      setRatingArray(updateArray);
    };

    const changeDisplay = (index: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(index);
    };

    const onClick = (index: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(index);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
      if (e.code != "Space" || !setRating) {
        return;
      }
      setRating(i);
    };

    return (
      <div {...props} ref={ref} className={styles.wrapper}>
        {ratingArray.map((r: JSX.Element, i: number) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
