import {RootState} from "../redusers";
import {ProductItemData} from "../../models/products";

export const getProductSelector = (state: RootState): Array<ProductItemData> => state.products.products
export const getFilteredProductsSelector = (state: RootState): Array<ProductItemData> => state.products.filteredProducts
export const getProductTypesSelector = (state: RootState): Array<string> => state.products.productTypes