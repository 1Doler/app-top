import {
  Advantages,
  Sort,
  HhData,
  Htags,
  Skills,
  Tag,
  SortEnum,
  Product,
} from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";

import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/toppage.interface";
import { useEffect, useReducer } from "react";
import { sortReducer } from "../../reducer/sort.reducer";
import { useScrollY } from "../../hooks/useScrollY";

export const TopPageComponents = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps) => {
  const [{ products: sortProducts, sort }, dispathSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const y = useScrollY();

  useEffect(() => {
    console.log("useEffect");
    dispathSort({ type: sort, products });
  }, [products]);

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort, products });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htags tag="h1">{page.title}</Htags>
        {products && (
          <Tag size="m" color="grey">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div className={styles.products}>
        {sortProducts &&
          sortProducts.map((p) => (
            <div key={p._id}>
              <Product product={p} layout />
            </div>
          ))}
      </div>
      <div className={styles.hhTitle}>
        <Htags tag="h2">Вакансии - {page.category}</Htags>

        <Tag size="m" color="red">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
      {!!page.advantages.length && <Advantages advantages={page.advantages} />}
      {page.seoText && (
        <div
          className={styles.seoText}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Skills tags={page.tags} />
    </div>
  );
};
