import React, {useEffect, useState} from 'react';
import axios from "axios";
import OrderItem from "./Orders/OrderItem";
import OrdersList from "./Orders/OrdersList";

const data = [];

const Orders = () => {

    const [records, setRecords] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
            setRecords(res.data);
        })
    }, []);

    return (
        <div>
            <h1>Booking List</h1>
            {records !== null
                ? <OrdersList records={records} />
                : <p>Loading...</p>
            }

        </div>
    );
};

export default Orders;