import { todoSlice } from '@/todo-list/todoSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  },
});
