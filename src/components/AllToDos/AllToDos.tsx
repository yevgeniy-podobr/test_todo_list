import React, { useEffect } from "react";
import './allToDos.scss';
import { ToDoList } from "../ToDoList";
import { useAppDispatch, useTypedSelector } from "../../redux/store";
import { setTodoList } from "../../redux/todoListReducer";
import { ESSKeys } from "../../models";

export const AllToDos = () => {
  const dispatch = useAppDispatch()
  const toDoListFromStore = useTypedSelector(s => s.todoList.todoList)
  const toDoListFromSS = sessionStorage.getItem(ESSKeys.todoList)

  useEffect(() => {
    toDoListFromSS && dispatch(setTodoList(JSON.parse(toDoListFromSS)))
  }, [toDoListFromSS, dispatch])

  return (
    <div className="all">
      <ToDoList toDoList={toDoListFromSS ? JSON.parse(toDoListFromSS) : toDoListFromStore}/>
    </div>
  )
}