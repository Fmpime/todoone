import axios from "axios";
import {AuhController} from "../CSC/CustomSetviceCenter";

const instanse = axios.create({
        baseURL: "http://localhost:8000/"
})
export const loginAPI = {
     login(login: string, password: string) {
       return  instanse.post("auth", {login, password}).then((resp)=>{
           return  AuhController(login,password).then(resp=>{
                return resp
            })
        })
    }
}
export const ToDoAPI = {
    getToDoList(value:string=""){
        return instanse.get("ToDoList"+value).then((resp)=>{
            return resp.data
            }
        )
    },
    addToDo(header: string, description: string, deadline: string, id: number){
            return instanse.post('ToDoList',{header,description,deadline,id,completed:false}).then(res=>{
                return res
            })

    },
    deleteToDo(id:number){
            return instanse.delete('ToDoList/'+id).then(res=>{
                return res
            })
    },
    completeToDo(id:number){
            return instanse.patch('ToDoList/'+id,{completed:true}).then(res=>{
                return res
            })
    }
}