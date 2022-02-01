import React, {useContext} from 'react';
import cl from "./Orders.module.css";
import AuthContext from "../../context/AuthContext";

const OrderItem = ({record, remove, selectToEdit}) => {

    const authContext = useContext(AuthContext);

    console.log('Orders Item', authContext);

    return (
        <div>
            <div className="users-list">
                <div key={record.id}>
                    {record.id} {record.name} {record.username} {record.email} {record.date_to} {record.date_from}
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