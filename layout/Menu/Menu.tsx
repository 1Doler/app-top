import { useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "../../context/app.context";
import { TopLevelCategory } from "../../interfaces/toppage.interface";

import { IPageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenuItem } from "../../helpers/helpers";

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const router = useRouter();
  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenuItem.map((m: IFirstLevelMenuItem) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: IPageItem[], route: string): JSX.Element => {
    return (
      <>
        {pages.map((p) => (
          <Link
            href={`/${route}/${p.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]:
                `/${route}/${p.alias}` == router.asPath,
            })}
            key={p._id}
          >
            {p.category}
          </Link>
        ))}
      </>
    );
  };

  return <div className={styles.menu}> {buildFirstLevel()}</div>;
};

export interface IFirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}
