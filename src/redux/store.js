

import { productApi } from "../service/product";
import { categoryReduser, productReduser } from "./reducers";
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    category: categoryReduser,
    product: productReduser,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
})
