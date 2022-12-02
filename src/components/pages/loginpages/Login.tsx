import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import Auth from "../../../store/auth";
import {Navigate} from "react-router";
import {observer} from "mobx-react-lite";
import ToDo from "../../../store/ToDo";
import classnames from 'classnames'
const Login = observer(() => {
    const [userNotFound, setUserNotFound] = useState(false)
        if (Auth.loginStatus) {
            return <Navigate to={"/main-page"}/>
        }
    const validateLogin = (value:string) => {
        if (!value) {
            return "required";
        } else if (/[@#$%^&*?><,./"]/i.test(value)) {
            return "invalid pass";
        }
    };
    const validatePass = (value:string) => {
        if (!value) {
            return "required";
        } else if (/[@#$%^&*?><,./"]/i.test(value)) {
            return "invalid login";
        }
    };
        return (
            <div className="auhPage">
                <Formik
                    initialValues={{
                        login: "",
                        password: ""
                    }}
                    onSubmit={(values) => {
                        Auth.loginTK(values.login, values.password).then((res)=>{
                            if (res){
                                ToDo.getToDo()
                            }else{
                                setUserNotFound(true)
                            }
                        })
                    }}
                >
                    {(formik) => (
                        <Form className="authField">

                            <label>{`${Auth.loginStatus}`}</label>
                            <Field
                                className={classnames("input", {
                                    ["errorValidate"]: formik.errors.login && formik.touched.login,
                                })}
                                placeholder="login"
                                name="login"
                                validate={validateLogin}
                            />
                            <label>Pass:</label>
                            <Field
                                className={classnames("input", {
                                    ["errorValidate"]: formik.errors.password && formik.touched.password,
                                })}
                                placeholder="pass"
                                name="password"
                                type="password"
                                validate={validatePass}
                            />
                            <button className="btn" type={"submit"}>login</button>
                            {userNotFound?<span style={{color:'red'}}>User not found!</span>:null}
                        </Form>
                    )}
                </Formik>

            </div>
        );
})
export default Login;