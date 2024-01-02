import { createSlice } from "@reduxjs/toolkit";

const initialUISliceState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUISliceState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // redux-toolkit using third party immer library which translated this mutable code into inmutable inernaly.
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
