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

    const [isAuth, setIsAuth] = useState(false);

    const auth = (status) => {
        setIsAuth(status);
        console.log( 'isAuth', status );
    }

    // const [status, setStatus] = React.useState(false)
    //
    // console.log('app status here', status);
    //
    // function checkStatus(status) {
    //     setStatus(status);
    // }
    //
    // if (status == true) {
    //     return <ThankYou />;
    // } else {
    //     return <BookingForm checkStatus={checkStatus} />;
    // }

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<BookingForm />}/>
                    <Route exact path="/login" element={<Auth auth={auth} />}/>
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