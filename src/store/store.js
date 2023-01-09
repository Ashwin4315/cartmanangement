import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartslice";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store;