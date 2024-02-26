import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incement: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state) => {
      if (state.count == 0) return state;
      return { ...state, count: state.count - 1 };
    },
  },
});

export default counterReducer.reducer;
export const { decrement, incement } = counterReducer.actions;
