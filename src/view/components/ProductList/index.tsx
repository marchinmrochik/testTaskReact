import React from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {getFilteredProductsSelector, getProductSelector} from "../../../init/store/selectors";
import {Grid} from "@mui/material";
import {ProductItem} from '../index'

import {ProductItemData} from "../../../init/models/products";

export const ProductList = () => {
  const products = useSelector(getProductSelector, shallowEqual)
  const filteredProducts = useSelector(getFilteredProductsSelector, shallowEqual);

  return (
      <Grid container spacing={4} mt={1}>
        {
          filteredProducts.length ?
            filteredProducts.map((item: ProductItemData) => <ProductItem key={item.uid} {...item}/>) :
            products.map((item: ProductItemData) => <ProductItem key={item.uid} {...item}/>)
        }
      </Grid>
  );
};