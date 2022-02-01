import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BookingForm from "../forms/BookingForm";
import Auth from "./components/Auth/Auth";
import Orders from "./components/Orders";
import AuthContext from "./context/AuthContext";

const AdminDashboard = () => {
    const authenticated = useContext(AuthContext)

    console.log('Admin Dashboard', authenticated.authenticated)

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <AuthContext.Provider value={authenticated}>
                <Auth />
                <Orders />
            </AuthContext.Provider>

        </div>
    );
};

export default AdminDashboard;