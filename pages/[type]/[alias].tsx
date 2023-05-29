import React from "react";
import axios from "axios";
import Head from "next/head";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

import { withLayout } from "../../layout/Layout";
import { IMenuItem } from "../../interfaces/menu.interface";
import { ITopPage, TopLevelCategory } from "../../interfaces/toppage.interface";
import { IProduct } from "../../interfaces/product.interface";

import { firstLevelMenuItem } from "../../helpers/helpers";
import { TopPageComponents } from "../../page-components/index";
import { API } from "../../helpers/api";

function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="article" />
      </Head>
      <TopPageComponents
        firstCategory={firstCategory}
        page={page}
        products={products}
      />
    </>
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenuItem) {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: m.id,
    });
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
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
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id,
    });
    if (menu.length === 0) {
      return { notFound: true };
    }
    const { data: page } = await axios.get<ITopPage>(
      API.topPage.byAlias + params.alias
    );
    const { data: products } = await axios.post<IProduct[]>(API.product.find, {
      category: page.category,
      limit: 10,
    });
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

interface TopPageProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  page: ITopPage;
  products: IProduct[];
}
