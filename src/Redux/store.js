import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";
//import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    product: productReducer,
    //user: userReducer
  },
});
