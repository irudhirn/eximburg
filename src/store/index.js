import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import productSlice from "./product-slice";
import curThirdBrandSlice from "./curThirdBrand-slice";

const Store = configureStore({
  reducer: {
    product: productSlice.reducer,
    curThirdBrand: curThirdBrandSlice.reducer
  }
});

export default Store;
