import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "showOrHideCart",
  initialState: { showcart: false },
  reducers: {
    showCart(state) {
      state.showcart = true;
    },
    hideCart(state) {
      console.log("hide");
      state.showcart = false;
    },
  },
});

export default showCartSlice;
