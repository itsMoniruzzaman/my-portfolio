import { TProduct } from "../types/product.type";
import { TProductState } from "../types/productState.type";

export const selectTotalPrice = (state: TProductState) => {
  return state.products.reduce((total: number, product: TProduct) => {
    return total + product.quantity! * Number(product.price.replace("$", ""));
  }, 0);
};
