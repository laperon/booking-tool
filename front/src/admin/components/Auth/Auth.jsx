import React, {useContext, useEffect, useState} from 'react';
import {useAuthLoginForm} from "../../hooks/useAuthLoginForm";
import AuthContext from "../../context/AuthContext";

const Auth = ({auth}) => {

    const [login, setLogin] = useState(false);
    const [password, setPassword] = useState(false);
    const {authenticated, setAuthenticated} = useContext(AuthContext);
    const authStatus = useAuthLoginForm(login, password);

    useEffect(()=>{
        auth(authStatus);
    }, [password, login])


    const onSubmitHandler = (e) => {
        e.preventDefault();

        setLogin(e.target[0].value);
        setPassword(e.target[1].value);
    }

    // auth()


    return (
        <form onSubmit={onSubmitHandler} className="login">
            <div className="form-group">
                <label htmlFor="login">Login</label>
                <input id="login" type="text" name="login" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="text" name="password" />
            </div>
            <div className="form-group">
                <input type="submit" value="Send Request" />
            </div>
        </form>
    );
};

export default Auth;