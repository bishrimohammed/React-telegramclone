import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth ",
  initialState: {
    user: null,
    token: null,
    Conservations: [],
    isConseravtionSet: false,
    Messages: [],
  },
  reducers: {
    setLogin(state, action) {
      state.user = action.payload.currentuser;
      state.token = action.payload.token;
    },
    setConservations(state, action) {
      state.Conservations = action.payload.consevations;
    },
    setConservation(state, action) {
      const updatedConsevationIndex = state.Conservations.findIndex(
        (conservation) => {
          return conservation._id === action.payload.id;
        }
      );
      const lastmessage = {
        lastText: action.payload.conservation.text,
        lastTextTime: action.payload.conservation.createdAt,
      };
      const conservation = state.Conservations[updatedConsevationIndex];
      state.Conservations[updatedConsevationIndex] = {
        ...conservation,
        lastMessage: lastmessage,
      };
    },
    setActiveConservation(state, action) {
      state.Conservations = state.Conservations.forEach((conser) =>
        conser._id === action.payload
          ? { ...conser, isAtive: true }
          : { ...conser, isAtive: false }
      );
    },
    setMessages(state, action) {
      state.Messages = action.payload.messages;
    },
    setMessage(state, action) {
      state.Messages.push(action.payload);
    },
    reverseConserSet(state, action) {
      state.isConseravtionSet = action.payload;
    },
  },
});
export const {
  setLogin,
  setConservations,
  setConservation,
  setMessages,
  setMessage,
  reverseConserSet,
} = authSlice.actions;
export default authSlice.reducer;
