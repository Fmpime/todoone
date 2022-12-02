import {makeAutoObservable} from "mobx";
import {ToDoAPI} from "../API/API";
type ToDoObjectType ={
    header:string
    description:string
    deadline:string
    completed:boolean
    id:number
}

class ToDo{
    ToDo:Array<ToDoObjectType>=[]
    popup:boolean=false
    constructor(){
        makeAutoObservable(this)
    }
    getToDo(value:string=''){
        ToDoAPI.getToDoList(value).then((resp)=>{
            this.ToDo = resp
        })
    }
    addToDo(values: { header: string; description: string; deadLine: string; }){
        let id = (new Date()).getTime()
        ToDoAPI.addToDo(values.header,values.description,values.deadLine,id).then((response)=>{
            ToDoAPI.getToDoList().then(response=>{
                this.ToDo = response
            })
        })

    }
    setPopup = (value:boolean) =>{
        this.popup=value
    }
    deleteToDo(id:number){
        return ToDoAPI.deleteToDo(id).then(res=> {
            ToDoAPI.getToDoList().then(response=>{
                this.ToDo = response
            })
            return res
        })
    }completeToDo(id:number){
        return ToDoAPI.completeToDo(id).then(res=> {
            ToDoAPI.getToDoList().then(response=>{
                this.ToDo = response
            })
            return res
        })
    }

    }

export default new ToDo;