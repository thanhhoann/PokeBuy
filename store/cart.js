import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: 0, name: [], image: [], newItem: [] },
  reducers: {
    totalCart(state, action) {
      state.cart += action.payload;
    },
    removeItem(state, action) {
      state.cart -= action.payload;
    },
    name(state, action) {
      state.name.push(action.payload);
    },
    image(state, action) {
      state.image.push(action.payload);
    },
    checkout(state, action) {
      const e = action.payload;
      state.newItem.push({
        name: e.name,
        image: e.image,
        price: e.price,
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
