import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import Auth from "../../../store/auth";
import ToDo from "../../../store/ToDo";
import {Field, Form, Formik} from "formik";
import {observer} from "mobx-react-lite";
import TodoList from "./TodoList/TodoList";
import InvalidDataReport from "../../../conversion/ValidateDate";

const TodoPage = observer(() => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!Auth.loginStatus) {
            navigate("/login")
        }
    }, [Auth.loginStatus])
    const [dateValidateStatus, setDateValidateStatus] = useState(false)
    const [headerValidateStatus, setHeaderValidateStatus] = useState(true)
    const dateValidate = (value: string) => {
        if (value !== undefined && value !== "") {
            setDateValidateStatus(InvalidDataReport(value))
        }
        if (value === "") {
            setDateValidateStatus(false)
        }
    }
    const headerValidate = (value: string) => {
        if (value && value.replace(/\s/g, "") !== "") {
            setHeaderValidateStatus(false)
        } else {
            setHeaderValidateStatus(true)
        }

    }

    const sortFunc = (value:string) =>{
        if (value==="All"){
            ToDo.getToDo("")
        }else if (value==="Done"){
            ToDo.getToDo("?completed=true")
        }else if (value==="Undone"){
            ToDo.getToDo("?completed=false")
        }
    }


    return (
        <div className="toDoPage">
            <div style={ToDo.popup ? {} : {display: "none"}} className="popup">
                <Formik
                    initialValues={{
                        description: "",
                        header: "",
                        deadLine: ""

                    }}
                    onSubmit={(values, formikHelpers) => {
                        ToDo.addToDo(values)
                        formikHelpers.resetForm()
                    }}>
                    {({errors, touched}) => (
                        <Form className={"fields"}>
                            <div className="fieldContainer">
                                <label className="fieldLabel">ToDo</label>
                                <Field
                                    name="header"
                                    type="text"
                                    placeholder="header"
                                    className={"field"}
                                    validate={headerValidate}
                                />
                                <label className="fieldLabel">deadline</label>
                                <Field className={"field"} validate={dateValidate} name="deadLine"
                                       type={"datetime-local"}></Field>
                            </div>
                            <div className="fieldContainer">
                                <label className="fieldLabel">description</label>
                                <Field
                                    placeholder="description"
                                    name="description"
                                    as="textarea"
                                    className={"textarea"}
                                />
                            </div>
                            <div>

                                <button disabled={dateValidateStatus || headerValidateStatus}
                                        className={"btn"}
                                        type={"submit"}
                                        onClick={() => ToDo.setPopup(false)}
                                >
                                    add ToDo
                                </button>
                                <button type={"button"} onClick={() => ToDo.setPopup(false)} className={"btn"}>close
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <select style={{marginLeft:"2em"}} id="selectID" onChange={(e)=>sortFunc(e.target.value)}>
                <option value="All">All</option>
                <option value="Done">Done</option>
                <option value="Undone">Undone</option>
            </select>
            <button style={{marginLeft:"2em"}} onClick={() => ToDo.setPopup(true)}>new ToDo</button>
            <TodoList/>
        </div>
    );
})

export default TodoPage;