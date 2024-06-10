// TODO: todoSlice 를 작성하세요.

import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 0, title: "제목", content: "내용", isDone: false }];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    removeTodo: (state, action) =>
      state.filter((el) => el.id !== action.payload),
  },
  modifyTodo: (state, action) =>
    state.map((el) =>
      el.id === action.payload.id ? { ...el, isDone: !el.isDone } : el
    ),
});

export const { addTodo, removeTodo, modifyTodo } = todoSlice.actions;
export default todoSlice.reducer;
