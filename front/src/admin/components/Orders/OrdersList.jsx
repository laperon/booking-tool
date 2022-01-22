import React from 'react';
import OrderItem from "./OrderItem";

const OrdersList = ({records}) => {
    return (
        <div>
            {records.map((record) =>
                <OrderItem key={record.id} record={record} />
            )}
        </div>

    );
};

export default OrdersList;