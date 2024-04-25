import React, { ReactElement, useState } from "react"
import './input.scss'
import { useDispatch } from "react-redux"
import { setTodoList } from "../../redux/todoListReducer"
import { useTypedSelector } from "../../redux/store"
import { v4 as uuidv4 } from 'uuid'

export const Input = (): ReactElement => {
  const dispatch = useDispatch()
  const todoList = useTypedSelector(s => s.todoList.todoList)
  const [newTodo, setNewTodo] = useState<string>('')

  const onAddTodo = (): void => {
    const preparedData = [
      ...todoList,
      {
        id: uuidv4(),
        name: newTodo,
        isCompleted: false,
      }
    ]
    dispatch(setTodoList(preparedData))
    setNewTodo('')
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="New todo..."
        className="input__content"
        value={newTodo}  
        onChange={(e): void => setNewTodo(e.target.value)}
        onKeyDown={(e): false | void => e.key === "Enter" && onAddTodo()}
      />
      <button 
        className="input__btn button"
        onClick={onAddTodo}
        disabled={!newTodo}
      >Add</button>
    </div>
  )
}