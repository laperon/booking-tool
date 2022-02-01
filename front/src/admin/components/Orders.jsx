import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import OrderItem from "./Orders/OrderItem";
import OrdersList from "./Orders/OrdersList";
import EditForm from "../blocks/EditForm";
import useTestData from "../hooks/useTestData";
import AuthContext from '../context/AuthContext';

const Orders = () => {

    const authenticated = useContext(AuthContext);
    const data = useTestData();

    console.log('orders', authenticated.authenticated);


    function updateRecord (props){
        data[props.id-1].status = props.status;

        console.log(data);
    }
    function removeRecord (prop) {
        console.log('removeRecord', prop);
    }
    function addRecord(prop) {
        console.log('addRecord', prop);
    }

    //@TODO get data from Microservice
    function getRecords() {}

    const bookingListComponent = <div>
        <h1>Booking List</h1>
        {data !== null
            ? <OrdersList
                update={updateRecord}
                remove={removeRecord}
                add={addRecord}
                records={data} />
            : <p>Loading...</p>
        }
    </div>

    console.log('authenticated', authenticated);

    if ( authenticated == true ) {
        return bookingListComponent
    }

    return false;
};

export default Orders;