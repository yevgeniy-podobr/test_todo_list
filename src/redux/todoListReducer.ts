import { createSlice } from '@reduxjs/toolkit'
import { IToDo } from '../models'

const defaultTodoList: IToDo[] = []

export const todoListSlice = createSlice({
  name: 'TODO-LIST-REDUCER',
  initialState: {
    todoList: defaultTodoList,
  },
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload
    },
  }
})

export const { setTodoList } = todoListSlice.actions
export const todoListReducer = todoListSlice.reducer