import React from 'react';

const OrderItem = ({record}) => {
    console.log(record);
    return (
        <div key={record.id}>
            {record.id} {record.name} {record.username} {record.email}
        </div>
    );
};

export default OrderItem;