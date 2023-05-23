import { Advantages, Card, HhData, Htags, Skills, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";

import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/toppage.interface";

export const TopPageComponents = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps) => {
  console.log(page);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htags tag="h1">{page.title}</Htags>
        {products && (
          <Tag size="m" color="grey">
            {products.length}
          </Tag>
        )}
        <span>sort</span>
      </div>
      <div className={styles.products}>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htags tag="h2">Вакансии - {page.category}</Htags>

        <Tag size="m" color="red">
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
      {!!page.advantages.length && <Advantages advantages={page.advantages} />}
      <div className={styles.seoText}>{page.metaDescription}</div>
      <Skills tags={page.tags} />
    </div>
  );
};
