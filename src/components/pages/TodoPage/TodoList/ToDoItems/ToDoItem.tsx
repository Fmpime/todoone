import React, {useState} from 'react';
import {TotalHour} from "../../../../../conversion/DateDestruct";
import ToDo from "../../../../../store/ToDo";

type ToDoItemPropsType = {
    headerItem: string
    descriptionItem: string
    deadLineItem: string
    completedItem: boolean
    idItem: number
}
const ToDoItem = (props: ToDoItemPropsType) => {
    const [deadLineItemState, setDeadLineItemState] = useState('')
    const [onDeadLine, setOnDeadLine] = useState(false)
    let interval = () => setTimeout(() => {
        setDeadLineItemState(TotalHour(props.deadLineItem, setOnDeadLine))
    }, 500)
    setTimeout(() => interval(), 500)
    return (
        <div className="toDoItem">
            <div className="headerAndDeadLine">
                <div><h3>{props.headerItem}</h3></div>
                {props.completedItem
                    ? <div><span style={{color: 'green'}}>done</span></div>
                    : <div>{onDeadLine ? <span style={{color: 'red'}}>time is over</span> :
                        <span>{deadLineItemState.match(/NaN/) ? "no time limit" : deadLineItemState}</span>}</div>
                }
            </div>
            <div className="description"><p>{props.descriptionItem}</p></div>
            <button className="btnDelete" onClick={() => {
                ToDo.deleteToDo(props.idItem)
            }}>delete
            </button>
            <button className="btnCompleted" onClick={() => {
                ToDo.completeToDo(props.idItem)
            }}>complete
            </button>
        </div>
    );
};

export default ToDoItem;