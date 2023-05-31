import React from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";
import { AdvantagesHeader, HomeHeader, Htags } from "../components/index";
import { ITopPage } from "../interfaces/toppage.interface";

function Home(): JSX.Element {
  return (
    <>
      <HomeHeader />
      <main>
        <AdvantagesHeader />
      </main>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
