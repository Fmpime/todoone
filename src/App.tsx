import React from 'react';
import './App.scss';
import Header from "./components/header/Header"
import {Route, Routes} from "react-router";
import Login from "./components/pages/loginpages/Login";
import TodoPage from "./components/pages/TodoPage/TodoPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route
                    path={"/"}
                    element={<Login/>}/>
                <Route
                    path={"/login"}
                    element={<Login/>}/>
                <Route
                    path={"/main-page"}
                    element={<TodoPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
