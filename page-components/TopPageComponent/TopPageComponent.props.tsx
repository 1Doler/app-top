import { IProduct } from "../../interfaces/product.interface";
import { ITopPage, TopLevelCategory } from "../../interfaces/toppage.interface";

export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: ITopPage;
  products: IProduct[];
}
