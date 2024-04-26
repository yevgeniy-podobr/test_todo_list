import React, { ReactElement, useState } from "react"
import { useTypedSelector } from "../../../redux/store"
import { useDispatch } from "react-redux"
import { setTodoList } from "../../../redux/todoListReducer"
import './toDo.scss'
import { ESSKeys, IToDo } from "../../../models"

export const ToDo = (props: IToDo): ReactElement => {
  const { name, isCompleted, id } = props
  const dispatch = useDispatch()
  const todoList = useTypedSelector(s => s.todoList.todoList)
  const [checked, setChecked] = useState<boolean>(isCompleted)

  const handleChange = (): void => {
    setChecked(!checked)
    const preparedData = todoList.map(todo => todo.id === id ? {
      ...todo,
      isCompleted: !checked,
    } : todo)
    dispatch(setTodoList(preparedData))
    sessionStorage.setItem(ESSKeys.todoList, JSON.stringify(preparedData))
  }

  return (
    <li 
      className="todo"
    >
      <label className="todo__label">
        <input 
          className="todo__checkbox"
          type="checkbox" 
          checked={checked}
          onChange={handleChange} 
        />
        {checked ? <s>{name}</s> : name}
      </label>
    </li>
  )
}