import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleCounter(state){
        state.showCounter = !state.showCounter
    },
    increment(state, action) {
      state.counter = state.counter + (action.payload ? action.payload : 1);
    },
    decrement(state, action) {
      state.counter = state.counter - (action.payload ? action.payload : 1);
    },
    reset(state) {
        state.counter = 0 ;
      },
  },
});

export const counterActions = counterSlice.actions

export default counterSlice.reducer;