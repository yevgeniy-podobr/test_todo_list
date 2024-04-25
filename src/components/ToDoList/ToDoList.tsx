import React, { ReactElement } from "react"
import './toDoList.scss'
import { ToDo } from "./ToDo"
import { IToDo } from "../../models"

interface IProps {
  toDoList: IToDo[]
}

export const ToDoList = (props: IProps): ReactElement => {

  return (
    <div className="todo-list">
      {!!props.toDoList.length ?
        <ul className="todo-list__list">
          {props.toDoList.map(todo =>
            <ToDo
              key={todo.id}
              name={todo.name}
              isCompleted={todo.isCompleted}
              id={todo.id}
            />
          )}
        </ul>
        :
        <div className="todo-list__empty">
          <p className="todo-list__empty-text">The list is empty...</p>
        </div>
      }
    </div>
  )
}