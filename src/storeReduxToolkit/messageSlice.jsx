import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "auth ",
  initialState: { user: null, token: null, Conservations: [] },
  reducers: {
    setLogin(state, action) {
      state.user = action.payload.currentuser;
      state.token = action.payload.token;
    },
    setConservations(state, action) {
      state.Conservations = action.payload.consevations;
    },
    setConservation(state, action) {
      const updatedConsevation = state.Conservations.map((conservation) => {
        if (conservation._id === action.payload.conservation._id)
          return action.payload.conservation;
        return conservation;
      });
      state.Conservations = updatedConsevation;
    },
  },
});
export const { setLogin, setConservations, setConservation } =
  messageSlice.actions;
export default messageSlice.reducer;
