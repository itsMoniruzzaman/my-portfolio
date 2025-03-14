import { TProductState } from "../types/productState.type";
import { selectTotalPrice } from "./selectTotalPrice";

export const selectTotalTax = (state: TProductState) =>
  selectTotalPrice(state) * state.taxRate;
