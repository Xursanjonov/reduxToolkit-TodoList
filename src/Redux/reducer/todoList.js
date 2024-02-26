import { createSlice } from "@reduxjs/toolkit";
import { getStorage } from "../../lib/storage";

const initialState = getStorage("todo") || {
    items: [],
  }

export const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    delet: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.items.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
  },
});

export const { add, delet, edit } = todoReducer.actions;

export default todoReducer.reducer;
