import { SortEnum } from "../components";
import { IProduct } from "../interfaces/product.interface";

export type SortActions =
  | { type: SortEnum.Rating; products: IProduct[] }
  | { type: SortEnum.Price; products: IProduct[] };

export interface SortReducerState {
  sort: SortEnum;
  products: IProduct[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: action.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: action.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    default:
      throw new Error("Неверный тип сортировки");
  }
};
