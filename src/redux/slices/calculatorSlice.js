import { createSlice } from "@reduxjs/toolkit";

// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
const initialstate = 0;

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialstate,
  reducers: {
    add: (state, action) => state + Number(action.payload),
    remove: (state, action) => state - Number(action.payload),
  },
});

export const { add, remove } = calculatorSlice.actions;
export default calculatorSlice.reducer;
