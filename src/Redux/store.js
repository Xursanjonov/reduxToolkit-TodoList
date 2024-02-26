import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer/todoList";
import { setStorage } from "../lib/storage";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

store.subscribe(()=>{setStorage("todo", store.getState().todos)})