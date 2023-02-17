import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
//import showCartSlice from "./showCartSlice";

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});
//, cartModal: showCartSlice.reducer
//export const showCartAction = showCartSlice.actions;

export default store;
