import React from "react";

const args = {
    authenticated: false,
    setAuthenticated: (prop) => {
        args.authenticated = prop;
    }
}

const AuthContext = React.createContext(args);

export default AuthContext;