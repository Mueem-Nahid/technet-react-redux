import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.ts";
import productReducer from "./features/products/productSlice.ts";
import {api} from "@/redux/api/apiSlice.ts";
import userReducer from "./features/user/userSlice.ts"

const store = configureStore({
   reducer: {
      cart: cartReducer,
      product: productReducer,
      [api.reducerPath]: api.reducer, // connecting api layer with store
      user: userReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store