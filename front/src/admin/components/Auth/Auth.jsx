import React, {useContext, useEffect, useState} from 'react';
import {useAuthLoginForm} from "../../hooks/useAuthLoginForm";
import AuthContext from "../../context/AuthContext";
import {Button, TextField} from "@mui/material";
import Stack from "@mui/material/Stack";

const Auth = ({authStatus}) => {

    const [login, setLogin] = useState(false);
    const [password, setPassword] = useState(false);
    const {authenticated, setAuthenticated} = useContext(AuthContext);
    const loginStatus = useAuthLoginForm(login, password);

    const sendAuthDataHandler = (e) => {
       e.preventDefault();

       //If login status true send info into AdminDashboard.jsx
       if (loginStatus === true) {
           authStatus(loginStatus);
       }
    }

    return (
        <Stack
            component="form"
            sx={{
                width: '25ch',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
            <TextField
                hiddenLabel
                onChange={(e)=>{
                    setLogin(e.target.value)
                }}
                id="login"
                label="Login"
                size="small"
            />
            <TextField
                hiddenLabel
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                id="password"
                label="Password"
                size="small"
            />
            <Button onClick={sendAuthDataHandler} variant="contained" color="success">
                Login
            </Button>
        </Stack>


        // <AuthContext.Consumer>
        //     {({authenticated, setAuthenticated})=>(
        //         <form onSubmit={onSubmitHandler} className="login">
        //             <div className="form-group">
        //                 <label htmlFor="login">Login</label>
        //                 <input id="login" type="text" name="login" />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="password">Password</label>
        //                 <input id="password" type="text" name="password" />
        //             </div>
        //             <div className="form-group">
        //                 <input type="submit" value="Send Request" />
        //             </div>
        //         </form>
        //     )}
        // </AuthContext.Consumer>
    );
};

export default Auth;