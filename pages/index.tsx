import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";
import { AdvantagesHeader, HomeHeader } from "../components/index";
import AdblockDetector from "../hooks/adblock/adblock-detector";

function Home({ menu, firstCategory }: { menu: IMenuItem[]; firstCategory: number }): JSX.Element {
  useEffect(() => {
    AdblockDetector.check().then((res) => {
      console.log(res ? "Блокировщик обнаружен" : "Блокировщик не обнаружен");
    });
  }, []);

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
