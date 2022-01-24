import React, {useState} from 'react';
import OrderItem from "./OrderItem";
import cl from "./Orders.module.css";
import EditForm from "../../blocks/EditForm";
import useTestData from "../../hooks/useTestData";

const OrdersList = ({records, add, remove, update}) => {

    const [selected, setSelected] = useState(false);

    function selectToEdit(prop) {
        setSelected(prop)
    }

    return (
        <div>
            {selected !== false
            ? <EditForm
                    update={update}
                    record={selected}
                    add={add}
                    update={update}
                />
            : ''
            }
            <div className={cl.order_list + (selected ? ' selected' : ' ')}>
                {records.map((record) =>
                    <OrderItem
                        selectToEdit={selectToEdit}
                        remove={remove}
                        record={record}
                        key={record.id}
                    />
                )}
            </div>


        </div>

    );
};

export default OrdersList;