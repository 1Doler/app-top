import {
  Advantages,
  Sort,
  HhData,
  Htags,
  Skills,
  Tag,
  Rating,
  SortEnum,
} from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";

import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/toppage.interface";
import { useReducer } from "react";
import { sortReducer } from "../../reducer/sort.reducer";

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

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
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
          sortProducts.map((p) => <div key={p._id}>{p.title}</div>)}
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
