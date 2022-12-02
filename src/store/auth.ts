
import {makeAutoObservable} from "mobx";
import {loginAPI} from "../API/API";

class Auth{
    loginStatus = false
    userLogin = ""
    constructor() {
        makeAutoObservable(this)
    }
    setUserLogin(value: string) {
        this.userLogin = value
    }
    setLoginStatus(value:boolean){
        this.loginStatus = value
    }

    loginTK(login: string, password: string){
        return loginAPI.login(login,password).then((response)=>{
            if (response) {
                this.setUserLogin(login)
                this.setLoginStatus(response)
                console.log(response,login)
                return response
            }else {return false}
        })
    }}

export default new Auth;