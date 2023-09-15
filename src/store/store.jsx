import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import productReducer from "./productSlice"
const store=configureStore({
    reducer:{
        cart:cartReducers,
        product:productReducer,
    },
})
;
export default store;