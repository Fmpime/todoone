import React from 'react';
import {Link} from "react-router-dom";
import Auth from "../../store/auth";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    return (
        <div className="appHeader">
            <h1>ToDoApp v1.0</h1>
            <div className="appHeaderAuthLinks">
                {Auth.loginStatus?
                    <Link className="appHeaderAuthLink" to={'/login'}>LogOut</Link>
                    : <><Link className="appHeaderAuthLink" to={'/login'}>Login</Link><Link
                        className="appHeaderAuthLink" to={'/registration'}>Registration</Link></>}
            </div>
        </div>
    );
})

export default Header;