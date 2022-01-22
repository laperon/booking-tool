import React from "react";

const AuthContext = React.createContext({
    authenticated: false,
    setAuthenticated: (auth) => {
        console.log('cotnext auth', auth)
    }
});

export default AuthContext;