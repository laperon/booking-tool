import React from 'react';
import cl from "./Orders.module.css";

const OrderItem = ({record, remove, selectToEdit}) => {

    return (
        <div>
            <div className="users-list">
                <div key={record.id}>
                    {record.id} {record.name} {record.username} {record.email}
                    <div className={cl.actions}>
                        <input onClick={() => {
                            remove(record.id)
                        }} type="button" name="remove" value="Remove" />
                        <input onClick={() => {
                            selectToEdit(record);
                        }}  type="button" name="remove" value="Edit" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrderItem;