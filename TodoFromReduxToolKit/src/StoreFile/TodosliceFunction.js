// StoreFile/TodosliceFunction.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); 
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updatetodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updatetodo } = TodoSlice.actions;
export default TodoSlice.reducer;
