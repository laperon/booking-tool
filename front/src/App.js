import React, {useState, useEffect, useContext} from "react";
import BookingForm from "./forms/BookingForm";
import ThankYou from "./forms/ThankYou"
import Auth from "./admin/components/Auth/Auth";
import AuthContext from "./admin/context/AuthContext";
import AdminDashboard from "./admin/AdminDashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Orders from "./admin/components/Orders";

export default function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<BookingForm />}/>
                    <Route exact path="/login" element={<Auth />}/>
                    <Route exact path="/admin" element={<AdminDashboard />}/>
                    <Route exact path="/admin/orders" element={<Orders />}/>
                </Routes>
            </Router>

            {/*{isAuth === true*/}
            {/*    ? */}
            {/*    :*/}
            {/*}*/}

        </div>
    )
}