import { TProductState } from "../types/productState.type";
import { selectTotalPrice } from "./selectTotalPrice";
import { selectTotalTax } from "./selectTotalTax";

export const selectGrandTotal = (state: TProductState) =>
  selectTotalPrice(state) + selectTotalTax(state);
