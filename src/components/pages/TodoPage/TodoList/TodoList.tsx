import React, {useEffect} from 'react';
import ToDo from "../../../../store/ToDo";
import ToDoItem from "./ToDoItems/ToDoItem";
import {observer} from "mobx-react-lite";

const TodoList = observer(() => {
    useEffect(()=>{
        ToDo.getToDo()
    },[])
    return (
        <div className="ToDoList">
            {ToDo.ToDo.map((el)=>{
                return <ToDoItem headerItem={el.header} descriptionItem={el.description} deadLineItem={el.deadline} completedItem={el.completed} idItem={el.id} />
            })}
        </div>
    )})

export default TodoList;