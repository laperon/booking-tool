import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BookingForm from "../forms/BookingForm";
import Auth from "./components/Auth/Auth";
import Orders from "./components/Orders";
import AuthContext from "./context/AuthContext";

const AdminDashboard = () => {
    // const {authenticated, setAuthenticated} = useContext(AuthContext)

    const [authenticated, setAuthenticated] = useState(false);

    const authStatus = (status) => {
        setAuthenticated(true);
        // console.log(setAuthenticated(true));
        console.log(authenticated);
    }

    return (
        <div className={authenticated.authenticated}>
            <h2>Admin Dashboard</h2>
            <AuthContext.Provider value={authenticated}>
                {authenticated == false
                    ? <Auth authStatus={authStatus} />
                    : <Orders />
                }
            </AuthContext.Provider>

        </div>
    );
};

export default AdminDashboard;