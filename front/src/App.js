import React, {useState, useEffect} from "react";
import BookingForm from "./forms/BookingForm";
import ThankYou from "./forms/ThankYou"


const sended = false;

export default function App() {

    const [status, setStatus] = React.useState(false)

    console.log('app status here', status);

    function checkStatus(status) {
        setStatus(status);
    }

    if (status == true) {
        return <ThankYou />;
    } else {
        return <BookingForm checkStatus={checkStatus} />;
    }
}