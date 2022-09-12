import { Action } from '../types';
import {ProductItemData} from "../../models/products";

export enum ProductActionTypes {
    GET_PRODUCT = "products/GET_PRODUCT_REQUEST",
    GET_PRODUCT_SUCCESS = "products/GET_PRODUCT_SUCCESS",
    GET_PRODUCT_FAILURE = "products/GET_PRODUCT_FAILURE",

    FILTERED_PRODUCT = "products/FILTERED_PRODUCT"
}

export type GetProductAction = Action<ProductActionTypes.GET_PRODUCT>;
export type GetProductSuccessAction = Action<ProductActionTypes.GET_PRODUCT_SUCCESS, Array<ProductItemData>>;
export type GetProductFailureAction = Action<ProductActionTypes.GET_PRODUCT_FAILURE>;

export type FilteredProductAction = Action<ProductActionTypes.FILTERED_PRODUCT, {
    product: string
}>

export type ProductAction =
    | GetProductAction
    | GetProductSuccessAction
    | GetProductFailureAction

    | FilteredProductAction

