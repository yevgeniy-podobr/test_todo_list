import React from "react";
import './completedToDos.scss';
import { ToDoList } from "../ToDoList";
import { useTypedSelector } from "../../redux/store";

export const CompletedToDos = () => {
  const toDoListFromStore = useTypedSelector(s => s.todoList.todoList)

  return (
    <div className="completed">
      <ToDoList toDoList={toDoListFromStore.filter(todo => todo.isCompleted)}/>
    </div>
  )
}