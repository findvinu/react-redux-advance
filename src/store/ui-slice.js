import { createSlice } from "@reduxjs/toolkit";

const initialUISliceState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUISliceState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // redux-toolkit using third party immer library which translated this mutable code into inmutable inernaly.
    },
    showNotification(state, action) {
      state.notification = {
        status: state.notification?.status,
        title: state.notification?.title,
        message: state.notification?.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
