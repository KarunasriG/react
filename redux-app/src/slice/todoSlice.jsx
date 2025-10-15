import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.done = action.payload.done;
        }
      });
    },
    // clearTodo: (state, action) => {
    //   state.splice(0, state.length);
    // },
  },
});

export const { addTodo, deleteTodo, updateTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
