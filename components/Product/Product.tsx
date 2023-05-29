import styles from "./Product.module.css";
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  forwardRef,
  useRef,
  useState,
  ForwardedRef,
} from "react";
import { IProduct } from "../../interfaces/product.interface";
import { Htags, Card, Rating, Tag, P, Button, ReviewForm } from "../index";
import { declOfNum, priceRu } from "../../helpers/helpers";
import cn from "classnames";
import { Review } from "../Review/Review";

import { motion } from "framer-motion";

interface ProductProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  product: IProduct;
}

export const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<"open" | "close">(
        "close"
      );

      const reviewRef = useRef<HTMLDivElement>(null);

      const scrollToReview = () => {
        setIsReviewOpened("open");
        reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };

      const variants = {
        visible: {
          display: "block",
          opacity: 1,
          height: "auto",
        },
        hidden: {
          display: "none",
          opacity: 0,
          height: 0,
        },
      };

      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product} key={product._id}>
            <div className={styles.logo}>
              <img
                src={`https://courses-top.ru${product.image}`}
                alt={product.title}
              />
            </div>
            <div className={styles.title}>
              <Htags tag="h3">{product.title}</Htags>
            </div>
            <div className={styles.price}>
              <div>{priceRu(product.price)}</div>
            </div>
            <div className={styles.credit}>
              <div>{priceRu(product.credit)}</div>
            </div>
            <div className={styles.rating}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((c) => (
                <Tag color="ghost" key={c}>
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>в кредит</div>
            <div className={styles.ratingTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount}{" "}
                {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
              </a>
            </div>

            <hr color="#EBEBEB" className={styles.hr} />

            <P size="m" className={styles.description}>
              {product.description}
            </P>
            <div className={styles.feature}>
              {product.characteristics.map((c) => (
                <div className={styles.characteristics} key={c.name}>
                  <span className={styles.characteristicsName}>{c.name}</span>
                  <span className={styles.characteristicsDots}>{}</span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advantagesTitle}>Преимущества</div>
                  <div className={styles.advantagesText}>
                    {" "}
                    {product.advantages}
                  </div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div className={styles.advantagesTitle}>Недостатки</div>
                  <div className={styles.advantagesText}>
                    {product.disadvantages}
                  </div>
                </div>
              )}
            </div>
            <hr color="#EBEBEB" className={styles.hr2} />

            <div className={styles.actions}>
              <Button apperance="primary">Узнать&nbsp;подробнее</Button>
              <Button
                apperance="ghost"
                arrow={isReviewOpened === "open" ? "down" : "right"}
                onClick={() =>
                  setIsReviewOpened((prev) =>
                    prev === "open" ? "close" : "open"
                  )
                }
              >
                Читать&nbsp;отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            animate={isReviewOpened === "open" ? "visible" : "hidden"}
            variants={variants}
            initial={"hidden"}
          >
            <Card ref={reviewRef} color="white" className={styles.review}>
              {product.reviews.map((r) => (
                <div key={r._id}>
                  <Review rewiew={r} />
                  <hr color="#EBEBEB" className={styles.hr} />
                </div>
              ))}
              <ReviewForm productid={product._id} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);
