import React from "react";
import './allToDos.scss';
import { ToDoList } from "../ToDoList";
import { useTypedSelector } from "../../redux/store";

export const AllToDos = () => {
  const toDoListFromStore = useTypedSelector(s => s.todoList.todoList)

  return (
    <div className="all">
      <ToDoList toDoList={toDoListFromStore}/>
    </div>
  )
}