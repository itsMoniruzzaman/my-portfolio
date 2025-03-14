import { TProduct } from "../types/product.type";
import { TProductState } from "../types/productState.type";

export const setSelectedItems = (state: TProductState) => {
  return state.products.reduce((total: number, product: TProduct) => {
    return Number(total + product.quantity!);
  }, 0);
};
