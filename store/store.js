import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import cartReducer from "./cart";

const store = configureStore({
  reducer: { counter: counterReducer, cart: cartReducer },
});

export default store;
