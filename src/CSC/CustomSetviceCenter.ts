import axios from "axios";
const instanse = axios.create({
        baseURL: "http://localhost:8000/",
        withCredentials: true,
        headers:{
        }
    }
);

export const AuhController = (login:string,password:string) => {
    return  instanse.get("/Users").then((response)=>{
        let LoginStat = false
        response.data.forEach((e:{id: string,login: string,password: string})=>{
            if (e.login === login && password === e.password) {
                LoginStat = true
            }})
            return LoginStat
    })

};

