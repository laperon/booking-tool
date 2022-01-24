import React, {useEffect, useState} from 'react';
import axios from "axios";
import OrderItem from "./Orders/OrderItem";
import OrdersList from "./Orders/OrdersList";
import EditForm from "../blocks/EditForm";
import useTestData from "../hooks/useTestData";

const Orders = () => {
    const data = useTestData();

    function updateRecord (prop){
        console.log('updateRecord', prop);
    }
    function removeRecord (prop) {
        console.log('removeRecord', prop);
    }
    function addRecord(prop) {
        console.log('addRecord', prop);
    }

    //@TODO get data from Microservice
    function getRecords() {}

    return (
        <div>
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
    );
};

export default Orders;