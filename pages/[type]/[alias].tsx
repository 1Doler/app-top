import React from "react";
import { IMenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { ITopPage, TopLevelCategory } from "../../interfaces/toppage.interface";
import { ParsedUrlQuery } from "node:querystring";
import { IProduct } from "../../interfaces/product.interface";
import { firstLevelMenuItem } from "../../helpers/helpers";

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return <>{products && products.length}</>;
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenuItem) {
    const { data: menu } = await axios.post<IMenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      { firstCategory: m.id }
    );
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenuItem.find(
    (m) => m.route === params.type
  );
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  try {
    const { data: menu } = await axios.post<IMenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      { firstCategory: firstCategoryItem.id }
    );
    if (menu.length === 0) {
      return { notFound: true };
    }
    const { data: page } = await axios.get<ITopPage>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
    );
    const { data: products } = await axios.post<IProduct[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
      {
        category: page.category,
        limit: 10,
      }
    );
    return {
      props: {
        page,
        menu,
        firstCategory: firstCategoryItem.id,
        products,
      },
    };
  } catch {
    return { notFound: true };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  page: ITopPage;
  products: IProduct[];
}
