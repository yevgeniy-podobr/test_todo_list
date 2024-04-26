import React, { useEffect, useState } from "react";
import './completedToDos.scss';
import { ToDoList } from "../ToDoList";
import { useAppDispatch, useTypedSelector } from "../../redux/store";
import { setTodoList } from "../../redux/todoListReducer";
import { ESSKeys } from "../../models";

export const CompletedToDos = () => {
  const dispatch = useAppDispatch()
  const toDoListFromStore = useTypedSelector(s => s.todoList.todoList)
  const toDoListFromSS = sessionStorage.getItem(ESSKeys.todoList)
  const [completedToDoList, setCompletedToDoList] = useState(toDoListFromStore)

  useEffect(() => {
    if (toDoListFromSS) {
      setCompletedToDoList(JSON.parse(toDoListFromSS))
      dispatch(setTodoList(JSON.parse(toDoListFromSS)))
    }
  }, [toDoListFromSS, dispatch])

  return (
    <div className="completed">
      <ToDoList toDoList={completedToDoList.filter(todo => todo.isCompleted)}/>
    </div>
  )
}